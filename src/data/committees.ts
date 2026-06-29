export type CommitteeMember = {
  name: string;
  position: string;
  imageSrc: string;
};

export type Committee = {
  key:
    | 'audit'
    | 'assistantAudit'
    | 'election'
    | 'education'
    | 'genderDevelopment'
    | 'socialDevelopment'
    | 'ethics'
    | 'bidsAwards'
    | 'mediationConciliation'
    | 'credit'
    | 'assistantCredit'
    | 'financeInvestment';
  name:
    | 'Audit Committee'
    | 'Assistant Audit Committee'
    | 'Election Committee'
    | 'Education Committee'
    | 'Gender and Development Committee'
    | 'Social Services and Development Committee'
    | 'Ethics Committee'
    | 'Bids and Awards Committee'
    | 'Mediation and Conciliation Committee'
    | 'Credit Committee'
    | 'Assistant Credit Committee'
    | 'Finance and Investment Committee';
  chairperson?: CommitteeMember;
  secretary?: CommitteeMember;
  members?: CommitteeMember[];
};

export const committees: Committee[] = [
  {
    key: 'audit',
    name: 'Audit Committee',
    chairperson: {
      name: 'BENJAMIN E. CANCAN',
      position: 'CHAIRPERSON',
      imageSrc: '/officers/AudCom/cancan.png',
    },
    secretary: {
      name: 'ARLINE M. VICTORIANO',
      position: 'SECRETARY',
      imageSrc: '/officers/AudCom/sarmiento.png',
    },
    members: [
      {
        name: 'CHRISTINE MARIE G. TAMON',
        position: 'VICE-CHAIRPERSON',
        imageSrc: '/officers/AudCom/cristine tamon1.png',
      },
    ],
  },
  {
    key: 'assistantAudit',
    name: 'Assistant Audit Committee',
    members: [
      {
        name: 'NILDO N. LOGRO, JR. (MIAGAO)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/LOGRO.png',
      },
      {
        name: 'ROSALIE N. MOCON (MIAGAO)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/mocon.png',
      },
      {
        name: 'ARLENE VICTORIANO (OTON)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/victoriano.png',
      },
      {
        name: 'RASEL MONTAÑO (OTON)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/montaño.png',
      },
      {
        name: 'ROSENY C. GALIA (GUIMARAS)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/galia.png',
      },
      {
        name: 'HANNAH ROSE E. GAJARDO (GUIMARAS)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/gajardo.png',
      },
    ],
  },
  {
    key: 'election',
    name: 'Election Committee',
    chairperson: {
      name: 'GREGORIO C. RUFINO',
      position: 'Chairperson',
      imageSrc: '/officers/EleCom/gregorio rufino1.png',
    },
    secretary: {
      name: 'ANGELINE L. GRANADA',
      position: 'Secretary',
      imageSrc: '/officers/EleCom/angie granada1.png',
    },
    members: [
      {
        name: 'VICTORIANO H. MADREDANO',
        position: 'vice-Chairperson',
        imageSrc: '/officers/EleCom/madredano.png',
      },
    ],
  },
  {
    key: 'education',
    name: 'Education Committee',
    members: [
      {
        name: 'CORAZON B. MONDRAGON',
        position: 'Chairperson',
        imageSrc: '/officers/Board of Directors/corazon mondragon1.png',
      },
      {
        name: 'RAJIS F. MONTECLARO',
        position: 'Secretary',
        imageSrc: '/officers/EdCom/fernandez.png',
      },
      {
        name: 'TEODOLFO N. SIESA (MAIN)',
        position: 'Member',
        imageSrc: '/officers/EdCom/ORDIZE.png',
      },
      {
        name: 'LEAH L. BARANCO (OTON)',
        position: 'Member',
        imageSrc: '/officers/EdCom/Ligaya Leonares.png',
      },
      {
        name: 'STEPHEN N. INTAL (MIAGAO)',
        position: 'Member',
        imageSrc: '/officers/EdCom/intal.png',
      },
      {
        name: 'NORIE MAY S. CABALING (GUIMARAS)',
        position: 'Member',
        imageSrc: '/officers/EdCom/educ group.png',
      },
      {
        name: 'PHOEBE T. SASOTA',
        position: 'Staff Representative',
        imageSrc: '/officers/EdCom/phoebe sasota.png',
      },
    ],
  },
  {
    key: 'genderDevelopment',
    name: 'Gender and Development Committee',
    members: [
      {
        name: 'MARILOU R. LLAVAN',
        position: 'Chairperson',
        imageSrc: '/officers/GAD/marilou llavan.png',
      },
      {
        name: 'AMPARO PEACHY HARRIET M. SAYOMAC',
        position: '',
        imageSrc: '/officers/GAD/peachy harriet.png',
      },
      {
        name: 'ERIC B. CORTEJO',
        position: 'Secretary',
        imageSrc: '/officers/GAD/cortejo.png',
      },
      {
        name: 'ALEX L. DOLLOLASA',
        position: 'Member',
        imageSrc: '/officers/GAD/alex dillolasa.png',
      },
      {
        name: 'ROLYN N. HARO',
        position: 'Member',
        imageSrc: '/officers/GAD/GAD group.png',
      },
      {
        name: 'JUDELYN M. SANTILLAN',
        position: 'Focal Person',
        imageSrc: '/officers/GAD/judelyn santillan1 copy.png',
      },
    ],
  },
  {
    key: 'socialDevelopment',
    name: 'Social Services and Development Committee',
    members: [
      {
        name: 'ANNA CECILIA R. PEFIANCO',
        position: 'Chairperson',
        imageSrc: '/officers/Board of Directors/anna cecilia pefianco1.png',
      },
      {
        name: 'RIZALDY F. FERNANDEZ',
        position: 'Secretary',
        imageSrc: '/officers/SSDC/melocoton.png',
      },
      {
        name: 'ROSEMARIE M. DELA CRUZ (OTON)',
        position: 'Member',
        imageSrc: '/officers/SSDC/ordize.png',
      },
      {
        name: 'MA. YLLIEZA A. MOLINING',
        position: 'Member',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
      {
        name: 'JENNIFER L. GAMARCHA (GUIMARAS)',
        position: 'Member',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
      {
        name: 'GLOREANNE P. MANA-AY',
        position: 'MGT. STAFF REPRESENTATIVE',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
    ],
  },
  {
    key: 'ethics',
    name: 'Ethics Committee',
    members: [
      {
        name: 'FRENIE C. PEDROA',
        position: 'Chairperson',
        imageSrc: '/officers/Ethics/frenie pedroa.png',
      },
      {
        name: 'GERLIE GRACE A. LOQUINARIO',
        position: 'Secretary',
        imageSrc: '/officers/Ethics/girlie grace loquinario.png',
      },
      {
        name: 'OFELIA B. MICIANO',
        position: 'Member',
        imageSrc: '/officers/Ethics/ofelia miciano1.png',
      },
    ],
  },
  {
    key: 'bidsAwards',
    name: 'Bids and Awards Committee',
    chairperson: {
      name: 'ALFREDO R. YSULAT',
      position: 'Chairperson',
      imageSrc: '/officers/Bids and Awards/alfredo ysulat.png',
    },
    secretary: {
      name: 'ERIBERTO P. VARGAS',
      position: 'Secretary',
      imageSrc: '/officers/Bids and Awards/VARGAS.png',
    },
    members: [
      {
        name: 'JULITO A. PAMIROYAN',
        position: 'Member',
        imageSrc: '/officers/Bids and Awards/PAMIROYAN.png',
      },
      {
        name: 'MERVIN A. JONELA',
        position: 'Mgt. Staff Representative',
        imageSrc: '/officers/Bids and Awards/mervin jonela.png',
      },
    ],
  },
  {
    key: 'mediationConciliation',
    name: 'Mediation and Conciliation Committee',
    chairperson: {
      name: 'LEILANI C. NOLASCO',
      position: 'Chairperson',
      imageSrc: '/officers/MedCon/Nolasco.png',
    },
    secretary: {
      name: 'BETTY P. OTILANO',
      position: 'Secretary',
      imageSrc: '/officers/MedCon/otilano.png',
    },
  },
  {
    key: 'credit',
    name: 'Credit Committee',
    chairperson: {
      name: 'GRACE A. AQUILLO',
      position: 'Chairperson',
      imageSrc: '/officers/CreCom/grace aquillo.png',
    },
    secretary: {
      name: 'CELIA G. LIM',
      position: 'Secretary',
      imageSrc: '/officers/CreCom/lim.png',
    },
    members: [
      {
        name: 'LYNNIE L. SANTILLAN',
        position: 'Member',
        imageSrc: '/officers/CreCom/basilia aranas.png',
      },
    ],
  },
  {
    key: 'assistantCredit',
    name: 'Assistant Credit Committee',
    members: [
      {
        name: 'NILDO N. LOGRO, JR. (MIAGAO)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/LOGRO.png',
      },
      {
        name: 'ROWENA M. FAILAGUTAN (MIAGAO)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/failagutan.png',
      },
      {
        name: 'EMEE T. GASCON (OTON)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/Emee T. Gascon.png',
      },
      {
        name: 'DAVE T. NONO (OTON)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/DAVE NONO.png',
      },
      {
        name: 'ELLA GRACE G. TABINGO (GUIMARAS)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/TABINGO.png',
      },
      {
        name: 'NORIE MAY S. CABALING (GUIMARAS)',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/cabaling.png',
      },
    ],
  },
  {
    key: 'financeInvestment',
    name: 'Finance and Investment Committee',
    members: [
      {
        name: 'DELIA C. MONTERO',
        position: 'Chairperson',
        imageSrc: '/officers/FIC/delia montero.png',
      },
      {
        name: 'NOLI G. VALENZUELA',
        position: 'Vice-Chairperson',
        imageSrc: '/officers/FIC/valenzuela.png',
      },
      {
        name: 'CHARLENE A. ORBINO',
        position: 'Secretary',
        imageSrc: '/officers/FIC/orbino.png',
      },
      {
        name: 'ORPHA JOSEFIN M. GALERA',
        position: 'Member',
        imageSrc: '/officers/FIC/eliseo canalin1.png',
      },
      {
        name: 'EMELDA F. ELIZALDE',
        position: 'Ex-Eficio',
        imageSrc: '/officers/FIC/FIC.jpg',
      },
    ],
  },
];

