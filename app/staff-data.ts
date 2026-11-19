export type FloorId = 6 | 4 | 2

export type Floor = {
  id: FloorId
  title: string
  label: string
  purpose: string
  whatsThere: string
  accent: 'blue' | 'purple' | 'teal'
  groupProfile?: string
}

export type StaffProfile = {
  firstName: string
  lastName: string
  role: string
  ext: string
  email: string
  floor: FloorId
  image?: string
}

export const floors: Floor[] = [
  {
    id: 6,
    title: 'Upper Level Area',
    label: '6th Floor',
    purpose: 'Academic research and technical operations.',
    whatsThere: 'Individual senior staff offices (such as senior climate researchers) and high-performance computing system administration zones.',
    accent: 'blue',
  },
  {
    id: 4,
    title: 'CSAG Operational Hub',
    label: '4th Floor',
    purpose: 'The main operational floor for CSAG (Climate System Analysis Group).',
    whatsThere: "Room 4.01 (the main CSAG administration hub), postgraduate student clusters, and the department's primary Boardroom.",
    accent: 'purple',
    groupProfile: 'CSAG addresses the climate change knowledge needs of developing nations, delivering tailored information, building capacity within the continent, and engaging with users around adaptation, policy, and impacts. Targeting critical knowledge needs in the context of developing nations, CSAG is one of the leading climate research groups in Africa. We are uniquely positioned to target critical knowledge needs and contribute to a broad spectrum of climate change activities. CSAG focuses on the generation of robust, relevant, regional climate change information while advancing our understanding of the dynamics and processes that drive the coupled climate system. Through this, and in collaboration with stakeholders, CSAG develops research products to address stakeholder needs and support the broader research activities in other disciplines. Unique blend of science and engagement: CSAG believes that active communication is two directional within a knowledge network of climate and non-climatic information. Engaging with stakeholders in the co-production of knowledge leads to climate related products that are user-focused and decision-relevant, while engendering a sustainable relationship between science and society. Dissemination of decision-relevant information: CSAG has developed a range of knowledge products (see our climate and weather drop-down menu) that are made available to the broader communities. These are all distributed centrally through a CSAG-hosted, user focused, data portal along with support materials and analysis tools for users. The information portal is a dynamic and evolving development as we constantly seek to become more effective in our communication. A central theme to complement these services is one of capacity building through training. Integrated research focus: A leading element of CSAGs approach to developing regional climate change information is the integration of multiple lines of evidence. Building from this, the focus is…',
  },
  {
    id: 2,
    title: 'Lower Level Area',
    label: '2nd Floor',
    purpose: 'A lively home for student learning, teaching, and shared resources.',
    whatsThere: 'Core undergraduate lecture venues, the specialized EGS Library, Studio 1, and Studio 3.',
    accent: 'teal',
  },
]

export const staffProfiles: StaffProfile[] = [
  { firstName: 'Bruce', lastName: 'Hewitson', role: 'Emeritus — Climate modeling, Climate science and society, Capacity building, Ethics of climate information, Climate change impacts', ext: '2873', email: 'bruce.hewitson@uct.ac.za', floor: 6, image: '/characters/bruce-hewitson.jpg' },
  { firstName: 'Willem Stefaan', lastName: 'Conradie', role: 'Lecturer in EGS — climate variability, observed weather, extreme events, wildfire weather', ext: '2748', email: 'willem.conradie@uct.ac.za', floor: 6, image: '/characters/willem-stefaan-conradie.jpg' },
  { firstName: 'Rodger', lastName: 'Duffett', role: 'Systems Administrator — High Performance Computing, Data Management, Systems Administration', ext: '3456', email: 'rodger.duffett@uct.ac.za', floor: 6, image: '/characters/rodger-duffett.jpg' },
  { firstName: 'Sayed', lastName: 'Hess', role: 'Systems Administrator & Computing Support', ext: '3457', email: 'sayed.hess@uct.ac.za', floor: 6, image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-stsahuYnizB6G5h0ZSUIdLpec6I8wP.jpg' },
  { firstName: 'Christopher', lastName: 'Jack', role: 'Director — High-performance computing, Dynamical and statistical modeling, Transdisciplinary methods and processes, Climate science and society, Climate risk and adaptation', ext: '2873', email: 'cjack@csag.uct.ac.za', floor: 4, image: '/characters/christopher-jack.jpg' },
  { firstName: 'Piotr', lastName: 'Wolski', role: 'Chief Research Officer — seasonal forecast, climate projections, attribution of extreme events', ext: '2748', email: 'wolski@csag.uct.ac.za', floor: 6, image: '/characters/piotr-wolski.jpg' },
  { firstName: 'Alice', lastName: 'McClure', role: 'Researcher — Transdisciplinary methods and processes, Learning and knowledge co-production, Equity and climate-resilience development, Climate risk and adaptation, African urban climate risks', ext: '2873', email: 'alice@csag.uct.ac.za', floor: 6, image: '/characters/alice-mcclure.jpg' },
  { firstName: 'Chris', lastName: 'Lennard', role: 'Senior Researcher — Climate-Sensitive Infectious Disease Modeling, Renewable Energy Resources, Learning and knowledge co-production, Stratospheric Climate Interventions, Capacity Building', ext: '2748', email: 'lennard@csag.uct.ac.za', floor: 6, image: '/characters/chris-lennard.jpg' },
  { firstName: 'Olivier', lastName: 'Crespo', role: 'Senior Researcher — Climate change, Agricultural Modeling, Smallholder Community Farming Systems, Supervision and Mentorship', ext: '2873', email: 'ob.crespo@uct.ac.za', floor: 6, image: '/characters/olivier-crespo.jpg' },
  { firstName: 'Mark', lastName: 'Tadross', role: 'Senior Researcher — Agrometeorology, Climate Modeling, Disaster Management, Climate Finance, Risk and Vulnerability Assessments', ext: '2748', email: 'mtadross@csag.uct.ac.za', floor: 4, image: '/characters/mark-tadross.jpg' },
  { firstName: 'Lisa', lastName: 'van Aardenne', role: 'Principal Scientific Officer — Climate science and health, Climate data science, Interdisciplinary collaborations, Data management, Advanced Research Computing Techniques', ext: '2873', email: 'lisa@csag.uct.ac.za', floor: 6, image: '/characters/lisa-van-aardenne.jpg' },
  { firstName: 'Sabina Abba', lastName: 'Omar', role: 'Research Officer — Climate modeling, climate change, climate dynamics', ext: '2748', email: 'sabina@csag.uct.ac.za', floor: 6, image: '/characters/sabina-abba-omar.jpg' },
  { firstName: 'Pierre-Louis', lastName: 'Kloppers', role: 'Data Coordinator & Scientific Programmer — Research Software Development, Data Management, Research Support, Climate Variability and Agriculture, Atmospheric sciences and Oceanography', ext: '3456', email: 'pierrelouis.kloppers@uct.ac.za', floor: 4, image: '/characters/pierre-louis-kloppers.jpg' },
  { firstName: 'Phillip', lastName: 'Mukwenha', role: 'Research Support — Information Systems, System Administration', ext: '3457', email: 'phillip.mukwenha@uct.ac.za', floor: 4, image: '/characters/phillip-mukwenha.jpg' },
  { firstName: 'Jerry Ogunniyi', lastName: 'Ogunniyi', role: 'Post-doctoral researcher — Climate modeling, Climate adaptation and intervention strategies, Renewable Energy Resources, Atmospheric physics, Climate data science', ext: '2873', email: 'jerry.ogunniyi@uct.ac.za', floor: 2, image: '/characters/jerry-ogunniyi.jpg' },
  { firstName: 'Djanna Koubodana', lastName: 'Houteta', role: 'Postdoctoral research scientist — Climate Information Services, Climate change Impacts, Hydrological Modeling, Climate modelling, Disaster Risk Reduction and Urban Climate Resilience', ext: '2748', email: 'djanna.koubodanahouteta@uct.ac.za', floor: 6, image: '/characters/djanna-koubodana-houteta.jpg' },
  { firstName: 'Lilian Namuma Sarah', lastName: "Kong'ani", role: 'Post-doctoral researcher — Environmental Governance and Management, Environmental Impact, Climate Change, Gender Mainstreaming, Sustainable Development', ext: '2873', email: 'lillian@csag.uct.ac.za', floor: 6, image: '/characters/lilian-namuma-sarah-kongani.jpg' },
  { firstName: 'Romyne', lastName: 'Karan', role: 'Researcher — Climate Change, Sustainability, Food Security and Nutrition, and Transdisciplinarity', ext: '2748', email: 'romyne@csag.uct.ac.za', floor: 6, image: '/characters/romyne-karan.jpg' },
  { firstName: 'Christina', lastName: 'Mazivila', role: 'Researcher — Geology, Technology and Sustainability', ext: '2873', email: 'christina.mazivila@uct.ac.za', floor: 6, image: '/characters/christina-mazivila.jpg' },
  { firstName: 'Matlhatse Elizabeth', lastName: 'Mohale', role: 'Researcher — Climate Health, Biodiversity Conservation, Environmental Governance, Environmental Policies, and Geomorphology', ext: '2748', email: 'matihatse.mohale@uct.ac.za', floor: 6, image: '/characters/matlhatse-elizabeth-mohale.jpg' },
  { firstName: 'Rabia', lastName: 'Jacobs', role: 'Researcher & Academic Project Assistant', ext: '2873', email: 'rabia.jacobs@uct.ac.za', floor: 4, image: '/characters/rabia-jacobs.jpg' },
  { firstName: 'Sarika', lastName: 'Govender', role: 'Training Coordinator — Environmental Management and Education & Training', ext: '2873', email: 'sarika@csag.uct.ac.za', floor: 4, image: '/characters/sarika-govender.jpg' },
  { firstName: 'Melanie', lastName: 'Rustin-Nefdt', role: 'Senior Administration Officer — Management Accounting, Financial Management, Administration, Operational Support', ext: '2748', email: 'melanie.rustinnefdt@uct.ac.za', floor: 4, image: '/characters/melanie-rustin-nefdt.jpg' },
  { firstName: 'Tanya', lastName: 'Dayaram', role: 'Junior Research Fellow — Human habitats, Nature, Urban Development and Creativity', ext: '2873', email: 'tanya.dayaram@uct.ac.za', floor: 6, image: '/characters/tanya-dayaram.jpg' },
  { firstName: 'Peter', lastName: 'Marsh', role: 'Junior Research Fellow — Climate Change Projections, Weather Forecasting, Data Visualisation, Scientific Tooling, Reproducibility', ext: '2748', email: 'peter.marsh@uct.ac.za', floor: 2, image: '/characters/peter-marsh.jpg' },
  { firstName: 'Khadija', lastName: 'Ally', role: 'Research assistant', ext: '2873', email: 'khadija.ally@uct.ac.za', floor: 2, image: '/characters/khadija-ally.jpg' },
  { firstName: 'Vhulenda', lastName: 'Netshitanzwani', role: 'Research assistant', ext: '2748', email: 'vhulenda.netshitanzwani@uct.ac.za', floor: 2, image: '/characters/vhulenda-netshitanzwani.jpg' },
  { firstName: 'Casea', lastName: 'Dickinson', role: 'Research assistant', ext: '2873', email: 'casea.dickinson@uct.ac.za', floor: 2, image: '/characters/casea-dickinson.jpg' },
]
