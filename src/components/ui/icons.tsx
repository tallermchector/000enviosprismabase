"use client";

import { Handshake, Shield, FileText } from "@phosphor-icons/react";
import React from "react";

export function HandshakeIcon({ className }: { className?: string }) {
  return <Handshake className={className} />;
}

export function ShieldIcon({ className }: { className?: string }) {
  return <Shield className={className} />;
}

export function FileTextIcon({ className }: { className?: string }) {
  return <FileText className={className} />;
}
