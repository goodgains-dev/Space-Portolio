'use client'

import { useEffect } from 'react';

function isMobile() {
  if (typeof window !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  return false;
}

export default function MobileRedirect() {
  useEffect(() => {
    if (isMobile()) {
      window.location.href = 'https://goodgainswork.com';
    }
  }, []);

  return null;
}
