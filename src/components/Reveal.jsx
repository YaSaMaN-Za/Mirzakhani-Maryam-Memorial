import { useState, useEffect, useRef } from "react";

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Reveal({
    as: Tag = "div",
    delay = 0,
    className = '',
    children,
    ...rest
}) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(
        () => prefersReducedMotion() || !('IntersectionObserver' in window)
    )
    useEffect(()=> {
        if (visible) return undefined
        const el = ref.current
        if(!el) return undefined
    })