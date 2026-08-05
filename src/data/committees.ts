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
      position: 'Chairperson',
      imageSrc: '/officers/AudCom/cancan.png',
    },
    secretary: {
      name: 'ARLENE M. VICTORIANO',
      position: 'Secretary',
      imageSrc: '/officers/AudCom/sarmiento.png',
    },
    members: [
      {
        name: 'VICTORIA H. MADREDANO',
        position: 'Vice-Chairperson',
        imageSrc: '/officers/AudCom/cristine tamon1.png',
      },
    ],
  },
  {
    key: 'assistantAudit',
    name: 'Assistant Audit Committee',
    members: [
      {
        name: 'ORPHA JOSEFIN M. GALERA',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/LOGRO.png',
      },
      {
        name: 'ARLYN B. BAÑARES',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/mocon.png',
      },
      {
        name: 'ROSALIE N. MOCON',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/victoriano.png',
      },
      {
        name: 'MARYVIC S. CAÑETE',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/montaño.png',
      },
      {
        name: 'CONIE A. GENANDA',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST AUDCOM/galia.png',
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
        name: 'CHRISTINE MARIE G. TAMON',
        position: 'Vice-Chairperson',
        imageSrc: '/officers/EleCom/madredano.png',
      },
    ],
  },
  {
    key: 'education',
    name: 'Education Committee',
    chairperson: {
      name: 'CORAZON B. MONDRAGON',
      position: 'Chairperson',
      imageSrc: '/officers/Board of Directors/corazon mondragon1.png',
    },
    secretary: {
      name: 'BASILIA M. ARANAS',
      position: 'Secretary',
      imageSrc: '/officers/EdCom/fernandez.png',
    },
    members: [
      {
        name: 'RAJIS F. MONTECLARO',
        position: 'Member',
        imageSrc: '/officers/EdCom/ORDIZE.png',
      },
      {
        name: 'LEAH L. BARANCO',
        position: 'Member',
        imageSrc: '/officers/EdCom/Ligaya Leonares.png',
      },
      {
        name: 'NORIE MAY S. CABALING',
        position: 'Member',
        imageSrc: '/officers/EdCom/educ group.png',
      },
      {
        name: 'PHOEBE T. SASOTA',
        position: 'Management Representative',
        imageSrc: '/officers/EdCom/phoebe sasota.png',
      },
    ],
  },
  {
    key: 'genderDevelopment',
    name: 'Gender and Development Committee',
    chairperson: {
      name: 'MERLINDA E. ALVIOR',
      position: 'Chairperson',
      imageSrc: '/officers/GAD/marilou llavan.png',
    },
    secretary: {
      name: 'AMPARO PEACHY HARRIET M. SAYOMAC',
      position: 'Secretary',
      imageSrc: '/officers/GAD/peachy harriet.png',
    },
    members: [
      {
        name: 'ERIC B. CORTEJO',
        position: 'Member',
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
    chairperson: {
      name: 'ELISEO C. CANALIN',
      position: 'Chairperson',
      imageSrc: '/officers/Board of Directors/anna cecilia pefianco1.png',
    },
    secretary: {
      name: 'MA. YLLIEZA A. MOLINING',
      position: 'Secretary',
      imageSrc: '/officers/SSDC/melocoton.png',
    },
    members: [
      {
        name: 'ALFREDO R. YSULAT',
        position: 'Member',
        imageSrc: '/officers/SSDC/ordize.png',
      },
      {
        name: 'ROSEMARIE M. DELA CRUZ',
        position: 'Member',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
      {
        name: 'JENNIFER L. GAMARCHA',
        position: 'Member',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
      {
        name: 'GLOREANNE P. MANA-AY',
        position: 'Management Representative',
        imageSrc: '/officers/SSDC/corazon mondragon1.png',
      },
    ],
  },
  {
    key: 'ethics',
    name: 'Ethics Committee',
    chairperson: {
      name: 'FRENIE C. PEDROA',
      position: 'Chairperson',
      imageSrc: '/officers/Ethics/frenie pedroa.png',
    },
    secretary: {
      name: 'GERLIE GRACE A. LOQUINARIO',
      position: 'Secretary',
      imageSrc: '/officers/Ethics/girlie grace loquinario.png',
    },
    members: [
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
      name: 'GRACE A. AQUILLO',
      position: 'Chairperson',
      imageSrc: '/officers/Bids and Awards/alfredo ysulat.png',
    },
    secretary: {
      name: 'JULITO A. PAMIROYAN',
      position: 'Secretary',
      imageSrc: '/officers/Bids and Awards/VARGAS.png',
    },
    members: [
      {
        name: 'ERIBERTO P. VARGAS',
        position: 'Member',
        imageSrc: '/officers/Bids and Awards/PAMIROYAN.png',
      },
      {
        name: 'MERVIN A. JONELA',
        position: 'Management Representative',
        imageSrc: '/officers/Bids and Awards/mervin jonela.png',
      },
    ],
  },
  {
    key: 'mediationConciliation',
    name: 'Mediation and Conciliation Committee',
    chairperson: {
      name: 'BETTY P. OTILANO',
      position: 'Chairperson',
      imageSrc: '/officers/MedCon/Nolasco.png',
    },
    secretary: {
      name: 'LEDA T. DE GRACIA',
      position: 'Secretary',
      imageSrc: '/officers/MedCon/otilano.png',
    },
    members: [
      {
        name: 'LEILANI C. NOLASCO',
        position: 'Member',
        imageSrc: '/officers/MedCon/otilano.png',
      },
    ],
  },
  {
    key: 'credit',
    name: 'Credit Committee',
    chairperson: {
      name: 'JOHN LESTER L. GONZALES',
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
        name: 'CHARLOTTE S. LEDESMA',
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
        name: 'NILDO N. LOGRO, JR.',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/LOGRO.png',
      },
      {
        name: 'SOCORRO N. NILMAO',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/failagutan.png',
      },
      {
        name: 'EMEE T. GASCON',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/Emee T. Gascon.png',
      },
      {
        name: 'DAVE T. NONO',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/DAVE NONO.png',
      },
      {
        name: 'ELLA GRACE G. TABINGO',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/TABINGO.png',
      },
      {
        name: 'ARLENE M. GANANCIAL',
        position: 'Assistant Member',
        imageSrc: '/officers/ASST CRECOM/cabaling.png',
      },
    ],
  },
  {
    key: 'financeInvestment',
    name: 'Finance and Investment Committee',
    chairperson: {
      name: 'DELIA C. MONTERO',
      position: 'Chairperson',
      imageSrc: '/officers/FIC/delia montero.png',
    },
    secretary: {
      name: 'CHARLENE A. ORBINO',
      position: 'Secretary',
      imageSrc: '/officers/FIC/orbino.png',
    },
    members: [
      {
        name: 'NOLI G. VALENZUELA',
        position: 'Member',
        imageSrc: '/officers/FIC/valenzuela.png',
      },
      {
        name: 'ANNA CECILIA R. PEFIANCO',
        position: 'Ex-Officio',
        imageSrc: '/officers/FIC/FIC.jpg',
      },
    ],
  },
];

