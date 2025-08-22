export const accountType = [
    {
      id: 1,
      type: "Argent Bank Checking (x8349)",
      amount: 2082.79,
      valable: "Available Balance",
      transactions: [
        { date: "2025-02-01", description: "Supermarché", depense: 120.5 },
        { date: "2025-02-02", description: "Abonnement Netflix", depense: 15.99 },
        { date: "2025-02-03", description: "Restaurant", depense: 45.0 },
        { date: "2025-02-04", description: "Essence", depense: 60.25 },
        { date: "2025-02-05", description: "Facture téléphone", depense: 30.0 },
      ],
    },
    {
      id: 2,
      type: "Argent Bank Saving (x67124)",
      amount: 10928.42,
      valable: "Available Balance",
      transactions: [
        { date: "2025-01-15", description: "Virement entrant", depense: 0 },
        { date: "2025-01-20", description: "Retrait partiel", depense: 500.0 },
        { date: "2025-01-25", description: "Achat voyage", depense: 1000.0 },
        { date: "2025-01-28", description: "Dépôt", depense: -200.0 }, // Dépôt => valeur négative
        { date: "2025-01-30", description: "Transfert vers compte courant", depense: 300.0 },
      ],
    },
    {
      id: 3,
      type: "Argent Bank Credit Card (x5201)",
      amount: 184.3,
      valable: "Current Balance",
      transactions: [
        { date: "2025-01-28", description: "Achat Amazon", depense: 50.0 },
        { date: "2025-01-29", description: "Cinéma", depense: 12.5 },
        { date: "2025-01-30", description: "Remboursement partiel", depense: -100.0 }, // Remboursement => valeur négative
        { date: "2025-02-01", description: "Facture internet", depense: 40.0 },
        { date: "2025-02-02", description: "Courses alimentaires", depense: 30.75 },
      ],
    },
  ];
  
  
 
  