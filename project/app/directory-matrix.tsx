'use client'

import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  ChevronDown,
  Cpu,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
  Users,
  X,
} from 'lucide-react'
import { floors, staffProfiles, type FloorId, type StaffProfile } from './staff-data'

function fullName(profile: StaffProfile) {
  return `${profile.firstName} ${profile.lastName}`
}

type DirectoryCharacter = {
  kind: 'character'
  name: string
  role: string
  floor: 2
  image: string
  description: string
}

const studentsCharacter: DirectoryCharacter = {
  kind: 'character',
  name: 'Students',
  role: 'Student community',
  floor: 2,
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/students%20icon-c8LkYvRfaeCbmvkNOfLPaZQFYLJ9lD.jpg',
  description: 'A friendly character for the students who learn, explore, and share ideas in the EGS Building.',
}

function CharacterToken({ character, index, onClick }: { character: DirectoryCharacter; index: number; onClick: () => void }) {
  return (
    <button type="button" className="profile-token-card profile-token-character" onClick={onClick} style={{ animationDelay: `${(index % 8) * 45}ms` }} aria-label={`Meet ${character.name}, the student community character on the 2nd Floor`}>
      <span className="token-name">{character.name}</span>
      <span className="avatar-token avatar-token-character">
        <span className="avatar-aura" />
        <Image src={character.image} alt="" fill sizes="112px" className="avatar-image students-character-image" />
        <span className="avatar-floor">F{character.floor}</span>
      </span>
      <span className="token-role">{character.role}</span>
      <span className="token-open"><ArrowUpRight aria-hidden="true" /> MEET CHARACTER</span>
    </button>
  )
}

function FloorStack({ selected, onSelect }: { selected: FloorId; onSelect: (floor: FloorId) => void }) {
  return (
    <div className="floor-stack-stage">
      <div className="stack-orbit orbit-one" /><div className="stack-orbit orbit-two" />
      <div className="floor-stack" aria-label="Choose a floor">
        {floors.map((floor, index) => (
          <button
            key={floor.id}
            type="button"
            className={`floor-plate floor-tone-${floor.accent}${selected === floor.id ? ' is-selected' : ''}`}
            style={{ top: `${index * 78}px` }}
            onClick={() => onSelect(floor.id)}
            aria-pressed={selected === floor.id}
            aria-label={`Select ${floor.label}, ${floor.title}`}
          >
            <span className="plate-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></span>
            <span className="plate-label"><strong>{floor.label}</strong><small>{floor.title}</small></span>
            <span className="plate-marker" aria-hidden="true" />
          </button>
        ))}
      </div>
      <span className="stack-caption"><span className="stack-caption-line" /> SELECT A FLOOR</span>
      <span className="stack-floor-count"><Building2 aria-hidden="true" /> THREE OPERATIONAL LEVELS</span>
    </div>
  )
}

function ProfileToken({ profile, index, onClick }: { profile: StaffProfile; index: number; onClick: () => void }) {
  const name = fullName(profile)
  const initials = `${profile.firstName[0]}${profile.lastName[0]}`
  return (
    <button type="button" className="profile-token-card" onClick={onClick} style={{ animationDelay: `${(index % 8) * 45}ms` }} aria-label={`Open professional profile for ${name}`}>
      <span className="token-name">{name}</span>
      <span className="avatar-token">
        <span className="avatar-aura" />
        {profile.image ? <Image src={profile.image} alt="" fill sizes="112px" className="avatar-image" /> : <span className="avatar-initials">{initials}</span>}
        <span className="avatar-floor">F{profile.floor}</span>
      </span>
      <span className="token-role">{profile.role.split(' — ')[0].trim()}</span>
      <span className="token-open"><ArrowUpRight aria-hidden="true" /> VIEW PROFILE</span>
    </button>
  )
}

function ProfileDialog({ value, onClose }: { value: StaffProfile | DirectoryCharacter | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (value && !dialog.open) dialog.showModal()
    if (!value && dialog.open) dialog.close()
  }, [value])

  return (
    <dialog ref={dialogRef} className="profile-dialog" aria-labelledby="profile-dialog-title" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close() }}>
      <button type="button" className="dialog-close" onClick={() => dialogRef.current?.close()} aria-label="Close profile"><X aria-hidden="true" /></button>
      {value && 'kind' in value ? (
        <div className="character-dialog-content">
          <div className="character-dialog-portrait"><Image src={value.image} alt="Six illustrated students holding notebooks against a deep-blue background" fill sizes="(max-width: 600px) 90vw, 420px" /></div>
          <p className="dialog-eyebrow">2ND FLOOR · STUDENT COMMUNITY</p>
          <h2 id="profile-dialog-title">{value.name}</h2>
          <p className="character-dialog-lead">{value.role}</p>
          <p className="character-dialog-copy">{value.description}</p>
          <div className="character-dialog-tags"><span><BookOpen aria-hidden="true" /> EGS Library</span><span><GraduationCap aria-hidden="true" /> Lecture venues</span><span><Cpu aria-hidden="true" /> Studios 1 &amp; 3</span></div>
        </div>
      ) : value ? (
        <div className="staff-dialog-content">
          <div className="dialog-portrait">
            {value.image ? <Image src={value.image} alt={`Illustrated character portrait of ${fullName(value)}`} fill sizes="(max-width: 600px) 140px, 180px" /> : <span className="dialog-initials">{value.firstName[0]}{value.lastName[0]}</span>}
            <span className="dialog-floor-chip">{floors.find((floor) => floor.id === value.floor)?.label}</span>
          </div>
          <div className="dialog-details">
            <p className="dialog-eyebrow">UCT EGS · STAFF DIRECTORY</p>
            <h2 id="profile-dialog-title">{fullName(value)}</h2>
            <p className="dialog-role">{value.role}</p>
            <div className="dialog-divider" />
            <a className="profile-detail-link" href={`mailto:${value.email}`}><span className="detail-icon"><Mail aria-hidden="true" /></span><span><small>UNIVERSITY EMAIL</small><strong>{value.email}</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a className="profile-detail-link" href={`tel:+2721650${value.ext}`}><span className="detail-icon"><Phone aria-hidden="true" /></span><span><small>UCT CONTACT EXTENSION</small><strong>021 650 {value.ext}</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <div className="profile-detail-static"><span className="detail-icon"><MapPin aria-hidden="true" /></span><span><small>LOCATION</small><strong>{floors.find((floor) => floor.id === value.floor)?.label} · EGS Building</strong></span></div>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}

export default function DirectoryMatrix({ onRestart }: { onRestart: () => void }) {
  const [activeFloor, setActiveFloor] = useState<FloorId>(4)
  const [search, setSearch] = useState('')
  const [dialogValue, setDialogValue] = useState<StaffProfile | DirectoryCharacter | null>(null)
  const currentFloor = floors.find((floor) => floor.id === activeFloor) ?? floors[1]
  const query = search.trim().toLocaleLowerCase()
  const filteredProfiles = useMemo(() => staffProfiles.filter((profile) => {
    const text = `${fullName(profile)} ${profile.role} ${profile.email}`.toLocaleLowerCase()
    return profile.floor === activeFloor && (!query || text.includes(query))
  }), [activeFloor, query])
  const characterMatchesSearch = `${studentsCharacter.name} ${studentsCharacter.role}`.toLocaleLowerCase().includes(query)
  const showStudentsCharacter = activeFloor === studentsCharacter.floor && characterMatchesSearch

  return (
    <section className="directory-experience" aria-labelledby="directory-title">
      <div className="directory-heading-row">
        <div><p className="scene-kicker"><span className="kicker-mark" /> 05 · CHRONO-STACKED DIRECTORY</p><h1 id="directory-title">The people behind<br /><em>the possibilities.</em></h1><p className="scene-summary">Choose a floor plate. Meet the people who make this place move.</p></div>
        <div className="directory-total"><span><Users aria-hidden="true" /></span><strong>28</strong><small>STAFF PROFILES</small></div>
      </div>

      <div className="directory-overview">
        <FloorStack selected={activeFloor} onSelect={setActiveFloor} />
        <div className={`floor-detail-card floor-tone-${currentFloor.accent}`} aria-live="polite">
          <div className="floor-detail-top"><span className="floor-detail-index">0{floors.findIndex((floor) => floor.id === activeFloor) + 1} / 03</span><span className="floor-detail-dot" /><span>FLOOR SNAPSHOT</span></div>
          <p className="floor-label">{currentFloor.label}</p><h2>{currentFloor.title}</h2>
          <div className="floor-fact"><span>PURPOSE</span><p>{currentFloor.purpose}</p></div>
          <div className="floor-fact"><span>WHAT&apos;S THERE</span><p>{currentFloor.whatsThere}</p></div>
          {currentFloor.groupProfile && <details className="group-profile-details" open><summary>CSAG group profile <ChevronDown aria-hidden="true" /></summary><p>{currentFloor.groupProfile}</p></details>}
        </div>
      </div>

      <div className="directory-people">
        <div className="people-heading"><div><p className="scene-kicker"><span className="kicker-mark" /> LEVEL {activeFloor.toString().padStart(2, '0')} · PEOPLE &amp; PLACES</p><h2>Meet your <em>neighbours.</em></h2><p>{filteredProfiles.length} staff profile{filteredProfiles.length === 1 ? '' : 's'} on the {currentFloor.label.toLowerCase()}{showStudentsCharacter ? ' · Students character' : ''}</p></div><label className="directory-search"><Search aria-hidden="true" /><span className="sr-only">Search this floor&apos;s staff</span><input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search names or roles" /><kbd>⌘ K</kbd></label></div>
        <div className="profile-grid" aria-live="polite">
          {filteredProfiles.map((profile, index) => <ProfileToken key={fullName(profile)} profile={profile} index={index} onClick={() => setDialogValue(profile)} />)}
          {showStudentsCharacter && <CharacterToken character={studentsCharacter} index={filteredProfiles.length} onClick={() => setDialogValue(studentsCharacter)} />}
        </div>
        {filteredProfiles.length === 0 && !showStudentsCharacter && <div className="directory-empty"><Search aria-hidden="true" /><strong>No staff found on this floor</strong><span>Try another name or research specialty.</span><button type="button" onClick={() => setSearch('')}>Clear search <ArrowRight aria-hidden="true" /></button></div>}
      </div>
      <div className="directory-footer"><span><Sparkles aria-hidden="true" /> A connected community, working for a changing world.</span><button type="button" onClick={onRestart}>Restart your visit <ArrowRight aria-hidden="true" /></button></div>
      <ProfileDialog value={dialogValue} onClose={() => setDialogValue(null)} />
    </section>
  )
}
