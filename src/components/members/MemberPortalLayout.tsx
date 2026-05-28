"use client";

import React from "react";

export default function MemberPortalLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 text-slate-600 max-w-2xl">{subtitle}</p>
            )}
          </div>
        )}
        <div className="bg-white border border-slate-200/70 rounded-2xl shadow-sm">
          <div className="p-4 sm:p-6 md:p-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

