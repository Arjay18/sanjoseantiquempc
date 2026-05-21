"use client";

import React from "react";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, title, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl mx-2">
        {title && (
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-gray-900">{title}</h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

