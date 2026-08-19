import { useContext } from "react";
import { AudioContext } from "./audioContextDef";

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio harus dipakai di dalam AudioProvider");
  }
  return ctx;
}
