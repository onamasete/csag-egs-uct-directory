'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Compass, Sparkles } from 'lucide-react'
import { CampusMap, BuildingExterior, LivingCorridor, WelcomeDesk } from './building-scenes'
import CsagLogo from './csag-logo'
import DirectoryMatrix from './directory-matrix'

const stageNames = ['Campus map', 'Building exterior', 'Hallway', 'Reception', 'Directory']

export default function BuildingExperience() {
  const [stage, setStage] = useState(1)
  const [transitioning, setTransitioning] = useState(false)

  function moveToStage(nextStage: number) {
    if (transitioning || nextStage < 1 || nextStage > stageNames.length || nextStage === stage) return
    setTransitioning(true)
    window.setTimeout(() => {
      setStage(nextStage)
      setTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 480)
  }

  return (
    <main className={`experience-shell stage-${stage}${transitioning ? ' is-transitioning' : ''}`}>
      <header className="experience-header">
        <a className="experience-brand" href="#start" onClick={(event) => { event.preventDefault(); moveToStage(1) }} aria-label="Restart the EGS Building explorer">
          <CsagLogo placement="header" />
        </a>
        <div className="journey-progress" aria-label={`Stage ${stage} of 5: ${stageNames[stage - 1]}`}>
          <span className="progress-caption">YOUR VISIT</span><div className="progress-track" role="progressbar" aria-valuemin={1} aria-valuemax={5} aria-valuenow={stage} aria-label="Visit progress"><span style={{ width: `${stage * 20}%` }} /></div><span className="progress-count">0{stage}<i>/</i>05</span>
        </div>
        {stage > 1 ? <button type="button" className="back-control" onClick={() => moveToStage(stage - 1)} disabled={transitioning} aria-label={`Go back to ${stageNames[stage - 2]}`}><ArrowLeft aria-hidden="true" /><span>Back</span></button> : <span className="header-compass"><Compass aria-hidden="true" /><span>UCT · CAPE TOWN</span></span>}
      </header>

      <div className="brand-pattern-field" aria-hidden="true">
        <svg className="brand-motif brand-motif-waves" viewBox="0 0 440 160" fill="none" focusable="false">
          <path d="M-24 34C20 34 20 8 64 8S108 34 152 34 196 8 240 8 284 34 328 34 372 8 416 8 460 34 484 34" stroke="#DCE5E8" strokeWidth="15" opacity=".7" />
          <path d="M-24 76C20 76 20 50 64 50S108 76 152 76 196 50 240 50 284 76 328 76 372 50 416 50 460 76 484 76" stroke="#5394B1" strokeWidth="11" opacity=".55" />
          <path d="M-24 118C20 118 20 92 64 92S108 118 152 118 196 92 240 92 284 118 328 118 372 92 416 92 460 118 484 118" stroke="#DF1B4C" strokeWidth="11" opacity=".4" />
          <path d="M-24 150C20 150 20 132 64 132S108 150 152 150 196 132 240 132 284 150 328 150 372 132 416 132 460 150 484 150" stroke="#5394B1" strokeWidth="8" opacity=".34" />
        </svg>
        <svg className="brand-motif brand-motif-tiles" viewBox="0 0 260 188" fill="none" focusable="false">
          <path d="M10 10H70V70A60 60 0 0 0 10 10Z" fill="#DF1B4C" opacity=".26" />
          <path d="M82 10H142V70A60 60 0 0 0 82 10Z" fill="#5394B1" opacity=".25" />
          <path d="M154 10H214V70A60 60 0 0 0 154 10Z" fill="#D6DEE1" opacity=".68" />
          <path d="M10 82H70V142A60 60 0 0 0 10 82Z" fill="#D6DEE1" opacity=".68" />
          <path d="M82 82H142V142A60 60 0 0 0 82 82Z" fill="#DF1B4C" opacity=".22" />
          <path d="M154 82H214V142A60 60 0 0 0 154 82Z" fill="#5394B1" opacity=".24" />
          <path d="M28 172A40 40 0 0 1 108 172M40 172A28 28 0 0 1 96 172" stroke="#5394B1" strokeWidth="7" strokeLinecap="round" opacity=".42" />
          <path d="M150 172A40 40 0 0 1 230 172M162 172A28 28 0 0 1 218 172" stroke="#D6DEE1" strokeWidth="7" strokeLinecap="round" opacity=".8" />
        </svg>
        <svg className="brand-motif brand-motif-rings" viewBox="0 0 340 140" fill="none" focusable="false">
          <circle cx="34" cy="34" r="23" stroke="#DF1B4C" strokeWidth="10" opacity=".5" />
          <circle cx="112" cy="34" r="23" stroke="#5394B1" strokeWidth="10" opacity=".58" />
          <circle cx="190" cy="34" r="23" stroke="#D6DEE1" strokeWidth="10" opacity=".9" />
          <circle cx="268" cy="34" r="23" stroke="#5394B1" strokeWidth="10" opacity=".58" />
          <circle cx="34" cy="108" r="23" stroke="#5394B1" strokeWidth="10" opacity=".58" />
          <circle cx="112" cy="108" r="23" stroke="#DF1B4C" strokeWidth="10" opacity=".5" />
          <circle cx="190" cy="108" r="23" stroke="#D6DEE1" strokeWidth="10" opacity=".9" />
          <circle cx="268" cy="108" r="23" stroke="#DF1B4C" strokeWidth="10" opacity=".5" />
        </svg>
      </div>

      <div className={`stage-transition-wash stage-transition-${stage}${transitioning ? ' is-active' : ''}`} aria-hidden="true"><span /><span /></div>
      <div className={`stage-content${stage === 5 ? ' stage-content-directory' : ''}`} key={stage} aria-live="polite">
        {stage === 1 && <CampusMap onEnter={() => moveToStage(2)} />}
        {stage === 2 && <BuildingExterior onEnter={() => moveToStage(3)} transitioning={transitioning} />}
        {stage === 3 && <LivingCorridor onContinue={() => moveToStage(4)} />}
        {stage === 4 && <WelcomeDesk onEnter={() => moveToStage(5)} transitioning={transitioning} />}
        {stage === 5 && <DirectoryMatrix onRestart={() => moveToStage(1)} />}
      </div>
      <footer className="experience-footer">
        <span><span className="footer-status-dot" /> UCT ENVIRONMENTAL &amp; GEOGRAPHICAL SCIENCE</span>
        <span className="footer-center"><Sparkles aria-hidden="true" /> A place for curious minds</span>
        {stage < 5 ? <span className="footer-step">{stageNames[stage - 1]} <i>·</i> {stage.toString().padStart(2, '0')}</span> : <button type="button" className="footer-directory-link" onClick={() => moveToStage(1)}>Start again <ArrowRight aria-hidden="true" /></button>}
      </footer>
    </main>
  )
}
