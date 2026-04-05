"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

export function useAddressAutocomplete(
  inputRef: React.RefObject<HTMLInputElement | null>,
  onSelect?: (address: string) => void
) {
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!inputRef.current || !window.google?.maps?.places) return;

    autocompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["address"],
        componentRestrictions: { country: "us" },
      }
    );

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.formatted_address && inputRef.current) {
        inputRef.current.value = place.formatted_address;
        onSelect?.(place.formatted_address);
      }
    });

    return () => {
      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [inputRef, onSelect]);
}
