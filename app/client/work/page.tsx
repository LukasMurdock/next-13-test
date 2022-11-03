'use client'
import { useSearchParams } from 'next/navigation'
import { TestLinkSection } from '../../../ui/TestLinkSection'

export default function ClientComponent() {
    useSearchParams()
    return <TestLinkSection />
}
