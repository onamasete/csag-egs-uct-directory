'use client'

import Image from 'next/image'
import CsagLogo from './csag-logo'
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ChevronRight,
  Hand,
  Leaf,
  MapPin,
  Sparkles,
} from 'lucide-react'

export function CampusMap({ onEnter }: { onEnter: () => void }) {
  return (
    <section className="scene-section map-section" aria-labelledby="map-title">
      <div className="scene-intro map-intro">
        <div>
          <p className="scene-kicker"><span className="kicker-mark" /> UCT UPPER CAMPUS · CAPE TOWN</p>
          <h1 id="map-title">Find your way to<br /><em>what matters.</em></h1>
          <p className="scene-summary">Start at the Environmental &amp; Geographical Science Building. Your visit begins on South Lane.</p>
        </div>
        <div className="coordinate-card"><span className="coordinate-icon"><MapPin aria-hidden="true" /></span><span><strong>EGS Building</strong><small>South Lane · Upper Campus</small></span></div>
      </div>

      <div className="map-frame">
        <div className="map-label map-label-campus"><span className="label-dot" /> UCT · UPPER CAMPUS</div>
        <div className="map-label map-label-lower">TABLE MOUNTAIN SLOPES</div>
        <svg className="campus-map-svg" viewBox="0 0 1100 570" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <defs>
            <pattern id="mapGrid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M 32 0 L 0 0 0 32" fill="none" stroke="#5394B1" strokeOpacity=".14" strokeWidth="1" /></pattern>
            <linearGradient id="terrain" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#E5E7EB" /><stop offset="1" stopColor="#FFFFFF" /></linearGradient>
          </defs>
          <rect width="1100" height="570" fill="url(#terrain)" />
          <rect width="1100" height="570" fill="url(#mapGrid)" />
          <g fill="none" stroke="#5394B1" strokeOpacity=".44" strokeWidth="1.2">
            <path d="M-40 118C131 18 240 172 385 95S648 39 794 117s205 100 349 18" /><path d="M-48 135C121 37 245 193 394 114S650 59 788 136s216 103 355 24" />
            <path d="M-38 451C120 356 250 481 391 407s248-87 390-22 236 80 371-6" /><path d="M-41 473C122 378 253 505 398 430s241-88 379-26 244 86 378 2" />
            <path d="M244-35C194 83 291 145 247 254s-74 189-25 350" /><path d="M267-35C217 83 315 150 270 263s-72 184-23 348" />
            <path d="M895-20C832 80 938 160 889 258s-63 189-14 340" /><path d="M919-20C855 83 960 164 913 265s-63 181-15 334" />
          </g>
          <g fill="none" stroke="#5394B1" strokeOpacity=".52" strokeLinecap="round" strokeLinejoin="round">
            <path d="M-50 370C99 325 195 326 304 296s168-45 277-35 203 3 329-55 178-79 253-73" strokeWidth="17" />
            <path d="M-50 370C99 325 195 326 304 296s168-45 277-35 203 3 329-55 178-79 253-73" stroke="#2C5266" strokeOpacity=".36" strokeWidth="2" />
            <path d="M141-30C184 80 279 118 343 179s95 105 105 185 3 153 95 246" strokeWidth="12" />
            <path d="M141-30C184 80 279 118 343 179s95 105 105 185 3 153 95 246" stroke="#2C5266" strokeOpacity=".34" strokeWidth="2" />
            <path d="M112 542C267 451 372 419 482 420s236 47 331-22 149-112 337-139" strokeWidth="10" />
            <path d="M738-30C699 71 707 160 755 228s104 104 102 185-48 140-67 188" strokeWidth="8" />
            <path d="M-10 244C153 253 264 235 365 213s223-16 325 27 228 90 432 55" strokeWidth="6" />
          </g>
          <g fill="#E5E7EB" stroke="#5394B1" strokeOpacity=".55" strokeWidth="1">
            <path d="M381 144h68v39h-68zM466 154h52v35h-52zM574 149h74v47h-74zM674 133h64v41h-64z" />
            <path d="M300 205h63v41h-63zM390 216h59v38h-59zM488 215h67v42h-67zM590 221h62v36h-62zM683 208h78v47h-78z" />
            <path d="M334 342h73v44h-73zM432 351h61v39h-61zM540 349h76v48h-76zM647 343h70v43h-70zM751 323h64v46h-64z" />
          </g>
          <g fill="#DF1B4C" fillOpacity=".5"><circle cx="325" cy="171" r="3"/><circle cx="544" cy="165" r="3"/><circle cx="711" cy="183" r="3"/><circle cx="369" cy="368" r="3"/><circle cx="619" cy="373" r="3"/></g>
        </svg>
        <div className="map-road-tag road-tag-north">UPPER CAMPUS ROAD</div>
        <div className="map-road-tag road-tag-south">SOUTH LANE</div>
        <div className="map-road-tag road-tag-ring">RING ROAD</div>
        <div className="map-compass" aria-label="North"><span>N</span><i /></div>
        <div className="map-scale"><i /><span>200 m</span></div>
        <button type="button" className="campus-pin" onClick={onEnter} aria-label="Enter the Environmental and Geographical Science Building on South Lane">
          <span className="pin-ripple" /><span className="pin-core"><MapPin aria-hidden="true" /></span><span className="pin-caption"><strong>EGS BUILDING</strong><small>Tap to enter</small></span>
        </button>
        <div className="map-route-card"><span className="route-line"><i /><i /><i /></span><span><strong>Your destination</strong><small>Environmental &amp; Geographical Science</small></span><ArrowRight aria-hidden="true" /></div>
      </div>
      <p className="map-note"><Sparkles aria-hidden="true" /> A stylized campus map · Pin marks the EGS Building on South Lane</p>
    </section>
  )
}

export function BuildingExterior({ onEnter, transitioning }: { onEnter: () => void; transitioning: boolean }) {
  return (
    <section className={`scene-section exterior-section${transitioning ? ' doors-opening' : ''}`} aria-labelledby="exterior-title">
      <div className="scene-intro compact-intro">
        <div><p className="scene-kicker"><span className="kicker-mark" /> 02 · SOUTH LANE ENTRANCE</p><h1 id="exterior-title">A building shaped<br />by <em>living systems.</em></h1></div>
        <p className="scene-summary">Environmental &amp; Geographical Science<br />University of Cape Town</p>
      </div>
      <div className="exterior-scene" aria-label="Illustrated EGS building facade with greenery, birds and cars along Ring Road">
        <div className="sky-orb" /><div className="exterior-cloud cloud-a"><i /><i /><i /></div><div className="exterior-cloud cloud-b"><i /><i /><i /></div>
        <span className="flying-bird bird-a"><i /><i /></span><span className="flying-bird bird-b"><i /><i /></span><span className="flying-bird bird-c"><i /><i /></span>
        <div className="mountain-ridge"><i /><i /><i /></div><div className="distant-campus"><i /><i /><i /><i /><i /></div>
        <div className="facade-planter planter-left"><i /><i /><i /><i /><i /><i /><i /></div><div className="facade-planter planter-right"><i /><i /><i /><i /><i /><i /></div>
        <div className="facade-building">
          <div className="facade-roof"><span>UCT · ENVIRONMENTAL &amp; GEOGRAPHICAL SCIENCE</span><div className="roof-plants"><i /><i /><i /><i /></div></div>
          <div className="facade-floor floor-six"><span className="facade-number">06</span><div className="facade-window-row">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div><div className="ivy ivy-left"><i /><i /><i /><i /><i /><i /></div></div>
          <div className="facade-floor floor-four"><span className="facade-number">04</span><div className="facade-window-row">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div><div className="balcony-planters"><i /><i /><i /><i /><i /><i /></div><div className="ivy ivy-right"><i /><i /><i /><i /><i /><i /></div></div>
          <div className="facade-floor floor-two"><span className="facade-number">02</span><div className="facade-window-row">{Array.from({ length: 7 }, (_, i) => <i key={i} />)}</div></div>
          <div className="facade-ground"><span className="ground-window" /><button type="button" className="glass-door door-left" onClick={onEnter} aria-label="Enter through the left glass door to the EGS hallway" /><button type="button" className="glass-door door-right" onClick={onEnter} aria-label="Enter through the right glass door to the EGS hallway" /><span className="ground-window" /></div>
          <div className="facade-steps" />
        </div>
        <div className="facade-tree tree-one"><i /><span /></div><div className="facade-tree tree-two"><i /><span /></div>
        <div className="fynbos fynbos-left"><div className="proteaflower"><i /><i /><i /><i /><i /><i /><b /></div><div className="proteaflower small-flower"><i /><i /><i /><i /><i /><b /></div></div>
        <div className="fynbos fynbos-right"><div className="proteaflower"><i /><i /><i /><i /><i /><i /><b /></div><div className="proteaflower small-flower"><i /><i /><i /><i /><i /><b /></div></div>
        <div className="parking-lot"><span className="parking-label">RING ROAD · VISITOR PARKING</span><div className="parking-slots"><i /><i /><i /><i /><i /></div><div className="ring-road"><div className="drive-car car-blue"><i /><i /><b /></div><div className="drive-car car-coral"><i /><i /><b /></div><div className="drive-car car-gold"><i /><i /><b /></div></div></div>
        <div className="exterior-caption"><Building2 aria-hidden="true" /><span><strong>EGS BUILDING</strong><small>Research in a changing climate</small></span></div>
        <div className="door-cue"><span>THE ENTRANCE</span><ArrowDown aria-hidden="true" /></div>
      </div>
      <p className="scene-hint"><span className="hint-pulse" /> Tap either glowing glass door to step inside</p>
    </section>
  )
}

export function LivingCorridor({ onContinue }: { onContinue: () => void }) {
  return (
    <section className="scene-section corridor-section" aria-labelledby="corridor-title">
      <div className="scene-intro compact-intro corridor-intro"><div><p className="scene-kicker"><span className="kicker-mark" /> 03 · INSIDE THE EGS BUILDING</p><h1 id="corridor-title">Follow the light.<br /><em>Find your people.</em></h1></div><p className="scene-summary">Research, learning and good conversation<br />meet around every corner.</p></div>
      <button type="button" className="corridor-scene" onClick={onContinue} aria-label="Listen to the students chatting, then walk forward to the reception desk">
        <span className="corridor-ceiling"><i /><i /><i /><i /><i /></span>
        <span className="corridor-back-wall"><span className="corridor-sign">ENVIRONMENTAL &amp; GEOGRAPHICAL SCIENCE</span><span className="corridor-end-window"><i /></span></span>
        <span className="corridor-wall corridor-wall-left"><i className="wood-panel" /><i className="wall-art"><span>CLIMATE<br />SYSTEMS</span></i><i className="door-panel"><span>4.01</span></i><span className="vertical-garden">{Array.from({ length: 15 }, (_, i) => <i key={i} />)}</span><span className="hanging-plant"><i /><i /><i /></span></span>
        <span className="corridor-wall corridor-wall-right"><i className="wood-panel" /><i className="wall-art wall-art-right"><span>FIELD NOTES<br />&amp; FUTURES</span></i><i className="door-panel door-panel-right"><span>MEETING ROOM</span></i><span className="hanging-plant plant-right"><i /><i /><i /></span></span>
        <span className="corridor-floor"><i /><i /><i /><i /><i /></span>
        <span className="corridor-people" aria-hidden="true">
          <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/students_in_coridor-removebg-preview-6lp1AF4w4fEFVp7dypYLVmdMNNWGwF.png" alt="" fill sizes="(max-width: 640px) 68vw, 50vw" unoptimized />
          <span className="corridor-chat corridor-chat-first">Morning!</span>
          <span className="corridor-chat corridor-chat-second">Ready for fieldwork?</span>
        </span>
        <span className="corridor-callout"><span className="callout-mark"><Leaf aria-hidden="true" /></span><span><strong>Where ideas take root</strong><small>People, plants &amp; possibility</small></span></span>
        <span className="corridor-action"><span>WALK FORWARD</span><ChevronRight aria-hidden="true" /><ChevronRight aria-hidden="true" /></span>
      </button>
      <p className="scene-hint"><span className="hint-pulse" /> Tap anywhere in the hallway to continue</p>
    </section>
  )
}

export function WelcomeDesk({ onEnter, transitioning }: { onEnter: () => void; transitioning: boolean }) {
  return (
    <section className={`scene-section reception-section${transitioning ? ' terminal-opening' : ''}`} aria-labelledby="reception-title">
      <div className="scene-intro compact-intro"><div><p className="scene-kicker"><span className="kicker-mark" /> 04 · THE RECEPTION DESK</p><h1 id="reception-title">You&apos;re in good<br /><em>hands here.</em></h1></div><p className="scene-summary">A warm welcome, a watchful eye<br />and a helpful way forward.</p></div>
      <div className="reception-scene">
        <div className="reception-backdrop"><span className="reception-light light-one" /><span className="reception-light light-two" /><span className="reception-wood-wall"><i /><i /><i /><i /><i /><i /><i /><i /></span><span className="office-plant plant-reception-left"><i /><i /><i /><b /></span><span className="office-plant plant-reception-right"><i /><i /><i /><b /></span></div>
        <div className="welcome-bubble"><span className="bubble-dot" /><p>Hi there! Welcome to the EGS Building.<br /><strong>How can we help you today?</strong></p></div>
        <div className="guard-stage"><div className="guard-halo" /><div className="guard-art guard-art-left"><Image src="/characters/security-guard-left.png" alt="UCT security officer welcoming visitors at reception" fill sizes="(max-width: 720px) 25vw, 220px" /></div><div className="guard-art guard-art-right"><Image src="/characters/security-guard-right.png" alt="Second UCT security officer welcoming visitors at reception" fill sizes="(max-width: 720px) 25vw, 220px" /></div><span className="guard-wave" aria-hidden="true"><Hand aria-hidden="true" /></span><span className="guard-nameplate"><Sparkles aria-hidden="true" /> YOUR RECEPTION TEAM</span></div>
        <div className="reception-desk"><div className="desk-top"><span className="desk-lamp"><i /></span><span className="desk-badge"><Building2 aria-hidden="true" /><span>UCT<br />EGS</span></span><button type="button" className="terminal-button" onClick={onEnter} aria-label="Tap the system terminal to open the interactive floor directory"><span className="terminal-glow" /><span className="terminal-screen"><span className="terminal-brand"><CsagLogo placement="terminal" /></span><strong>TAP SYSTEM TERMINAL<br />TO EXPAND MAP</strong><span className="terminal-bottom"><span className="terminal-dot" /> READY TO EXPLORE <ArrowRight aria-hidden="true" /></span></span><span className="terminal-base" /></button><span className="desk-leaf"><Leaf aria-hidden="true" /></span></div><div className="desk-front"><span>ENVIRONMENTAL &amp; GEOGRAPHICAL SCIENCE</span><i /><i /><i /><i /><i /></div></div>
      </div>
      <p className="scene-hint"><span className="hint-pulse" /> Tap the glowing terminal to open the floor directory</p>
    </section>
  )
}
