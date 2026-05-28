import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { cookies } from 'next/headers';

// Configure route for file uploads
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30; // 30 seconds timeout

export async function POST(request: Request) {
  try {
    console.log('=== UPLOAD REQUEST STARTED ===');
    console.log('Request URL:', request.url);
    console.log('Request headers:', Object.fromEntries(request.headers.entries()));
    
    // Check authentication using cookies
    try {
      const cookieStore = await cookies();
      const sessionToken = cookieStore.get('next-auth.session-token') || 
                          cookieStore.get('__Secure-next-auth.session-token');
      
      console.log('Session token present:', !!sessionToken);
      
      if (!sessionToken) {
        console.error('No session token found - user not authenticated');
        return NextResponse.json({ error: 'Unauthorized - Please log in' }, { status: 401 });
      }
    } catch (authError) {
      console.error('Auth check error:', authError);
      // Continue anyway for now, but log the issue
      console.warn('Proceeding with upload despite auth check error');
    }

    const formData = await request.formData();
    console.log('FormData received, keys:', Array.from(formData.keys()));
    
    const file = formData.get('file') as File;
    
    if (!file) {
      console.error('Upload failed: No file in request');
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    console.log('File received:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      console.error('Invalid file type:', file.type);
      return NextResponse.json({ 
        error: `Invalid file type. Allowed types: ${allowedTypes.join(', ')}` 
      }, { status: 400 });
    }

    // Validate file size (max 20MB)
    const maxSize = 20 * 1024 * 1024; // 20MB
    if (file.size > maxSize) {
      console.error('File too large:', file.size);
      return NextResponse.json({ 
        error: `File too large. Maximum size is ${maxSize / (1024 * 1024)}MB` 
      }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log('Uploading to Vercel Blob Storage...');
    
    // Upload to Vercel Blob Storage
    // NOTE: @vercel/blob SDK only supports `access: 'public'`.
    // To protect member documents, avoid storing them in public blob URLs.
    // This route should be refactored to store securely or serve via an auth-checked endpoint.
    const blob = await put(file.name, buffer, {
      access: 'public',
      contentType: file.type,
    });
    
    console.log('File uploaded successfully to Blob Storage:', blob.url);
    console.log('=== UPLOAD REQUEST COMPLETED SUCCESSFULLY ===');
    
    return NextResponse.json({ url: blob.url, success: true });
  } catch (error) {
    console.error('=== UPLOAD REQUEST FAILED ===');
    console.error('Error uploading file:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    return NextResponse.json({ 
      error: 'Failed to upload file', 
      details: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    }, { status: 500 });
  }
}
