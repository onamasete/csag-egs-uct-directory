'use client'

import Image from 'next/image'

type CsagLogoProps = {
  placement: 'header' | 'terminal'
}

const source = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qKVVDCKImJiHBrnnQ43gNPcu1fEK1X.png'

export default function CsagLogo({ placement }: CsagLogoProps) {
  return (
    <span className={`csag-logo csag-logo-${placement}`}>
      <Image src={source} alt="Climate System Analysis Group CSAG" width={742} height={772} unoptimized />
    </span>
  )
}
