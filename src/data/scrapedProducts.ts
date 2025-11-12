type ScrapedProductDetail = {
  label: string;
  value: string;
};

type ScrapedProduct = {
  name: string;
  image: string;
  hiRes: string;
  price: string;
  details: ScrapedProductDetail[];
  description: string;
  video?: string;
  gallery?: string[];
};

export const scrapedProducts: Record<string, ScrapedProduct[]> = {
  "tmt-bars": [
    {
      name: "25mm Vizag Steel TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438258895/ZH/DG/QB/213683241/25mm-vizag-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438258895/ZH/DG/QB/213683241/25mm-vizag-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 68 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "25 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Vizag Steel" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" }
      ],
      description:
        "Vizag Fe 500D bars pair a tough outer shell with a ductile core, delivering reliable strength and bendability for RCC columns and pile caps.",
      video: "https://www.youtube.com/watch?v=UiH8uPWQ_MI",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438258895/ZH/DG/QB/213683241/25mm-vizag-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/UiH8uPWQ_MI/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388989/NL/PL/XM/213683241/25mm-vizag-steel-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm Vizag Steel TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 53 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Brand", value: "Vizag Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "Thermo-mechanically treated Vizag ribs offer dependable ductility and gripping strength for beams, slabs, and columns.",
      video: "https://www.youtube.com/watch?v=UiH8uPWQ_MI",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438260396/LG/MT/CS/213683241/10mm-vizag-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/UiH8uPWQ_MI/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389026/GF/ZP/BC/213683241/10mm-vizag-steel-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm Vizag Steel TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438265486/ZZ/CU/QO/213683241/8mm-vizag-steel-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438265486/ZZ/CU/QO/213683241/8mm-vizag-steel-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 50 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "8 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Material", value: "Mild Steel" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Vizag" },
        { label: "Usage/Application", value: "Building Construction" }
      ],
      description:
        "Lightweight Vizag stirrups provide reliable anchorage and bend smoothly for lintels, slabs, and ties.",
      video: "https://www.youtube.com/watch?v=UiH8uPWQ_MI",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438265486/ZZ/CU/QO/213683241/8mm-vizag-steel-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/UiH8uPWQ_MI/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388851/PF/DB/VQ/213683241/8mm-vizag-steel-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm ARS TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438295457/TS/VP/BB/213683241/10mm-ars-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438295457/TS/VP/BB/213683241/10mm-ars-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 70 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "10mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "ARS" }
      ],
      description:
        "ARS 550D rebars combine low phosphorus chemistry with Tempcore quenching, delivering ductility and shock absorption for seismic structures.",
      video: "https://www.youtube.com/watch?v=KdUB5_eAaew",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438295457/TS/VP/BB/213683241/10mm-ars-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/KdUB5_eAaew/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388882/AN/DT/PL/213683241/10mm-ars-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm ARS TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438297485/RZ/VU/SZ/213683241/8mm-ars-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438297485/RZ/VU/SZ/213683241/8mm-ars-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 69 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "8mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "6 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "ARS" }
      ],
      description:
        "Slim ARS 550D stirrups offer high ductility and SGS-certified quality for resilient beam cages and lintels.",
      video: "https://www.youtube.com/watch?v=KdUB5_eAaew",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438297485/RZ/VU/SZ/213683241/8mm-ars-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/KdUB5_eAaew/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388900/BD/VM/NG/213683241/8mm-ars-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm ARS TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438300116/AR/QH/SS/213683241/12mm-ars-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438300116/AR/QH/SS/213683241/12mm-ars-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 69 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "12mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "ARS" }
      ],
      description:
        "High-yield ARS bars provide earthquake resistance, corrosion protection, and notable steel savings for heavy structural members.",
      video: "https://www.youtube.com/watch?v=KdUB5_eAaew",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438300116/AR/QH/SS/213683241/12mm-ars-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/KdUB5_eAaew/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388915/YN/OE/BM/213683241/12mm-ars-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm Amman Try TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438672000/FR/QK/AI/213683241/am3-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438672000/FR/QK/AI/213683241/am3-1000x1000.jpg",
      price: "Approx. Rs 72 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Single Piece Length", value: "6 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Carbon Steel" },
        { label: "Brand", value: "AMMAN TRY" },
        { label: "Diameter", value: "8 mm" }
      ],
      description:
        "Amman-TRY FE 550 D bars use Tempcore technology and low P/S chemistry to deliver high ductility for heavy-duty RCC structures.",
      video: "https://www.youtube.com/watch?v=tcEs8BtnvpM",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438672000/FR/QK/AI/213683241/am3-1000x1000.jpg",
        "https://img.youtube.com/vi/tcEs8BtnvpM/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438672001/YN/IC/ON/213683241/am2-1000x1000.jpg"
      ]
    },
    {
      name: "8mm Amman Try TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438668082/ZO/OV/NV/213683241/8mm-amman-try-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438668082/ZO/OV/NV/213683241/8mm-amman-try-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 64 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "8 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Carbon Steel" },
        { label: "Brand", value: "AMMAN TRY" }
      ],
      description:
        "Tempcore-treated Amman-TRY stirrups deliver superior ductility, low phosphorus chemistry, and reliable martensite structure.",
      video: "https://www.youtube.com/watch?v=tcEs8BtnvpM",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438668082/ZO/OV/NV/213683241/8mm-amman-try-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/tcEs8BtnvpM/sddefault.jpg"
      ]
    },
    {
      name: "10mm Amman Try TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438674095/EV/WB/IT/213683241/10mm-amman-try-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438674095/EV/WB/IT/213683241/10mm-amman-try-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 80 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Brand", value: "AMMAN TRY" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Carbon Steel" }
      ],
      description:
        "Amman-TRY FE 550 D rebars deliver high ductility and up to 20% steel savings when engineered correctly.",
      video: "https://www.youtube.com/watch?v=tcEs8BtnvpM",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438674095/EV/WB/IT/213683241/10mm-amman-try-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/tcEs8BtnvpM/sddefault.jpg"
      ]
    },
    {
      name: "12mm Suryadev TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438330295/IX/AU/WX/213683241/12mm-vizag-vsp-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438330295/IX/AU/WX/213683241/12mm-vizag-vsp-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 55 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Diameter", value: "12 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Product Brand", value: "Suryadev" }
      ],
      description:
        "Suryadev Fe 550D bars balance tensile strength, bonding, and weldability—ideal for residential RCC.",
      video: "https://www.youtube.com/watch?v=d1RuAqL_nYQ",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438330295/IX/AU/WX/213683241/12mm-vizag-vsp-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/d1RuAqL_nYQ/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388962/HF/KM/WV/213683241/12mm-suryadev-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm Suryadev TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 72 / Kg",
      details: [
        { label: "Diameter", value: "25 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Minimum Tensile Strength", value: "500 N/mm2" },
        { label: "Standards", value: "IS 1786" },
        { label: "Brand", value: "Suryadev" },
        { label: "Usage", value: "Constructions" }
      ],
      description:
        "Heavy Suryadev bars deliver high tensile strength, excellent bonding, and superior re-bend properties for major RCC members.",
      video: "https://www.youtube.com/watch?v=d1RuAqL_nYQ",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438332184/BX/NL/AF/213683241/12mm-suryadev-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/d1RuAqL_nYQ/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389297/GG/MF/EI/213683241/25mm-suryadev-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm Vizag Steel TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438263475/PM/IC/RZ/213683241/12mm-vizag-steel-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438263475/PM/IC/RZ/213683241/12mm-vizag-steel-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 60 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "12 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Material", value: "Mild Steel" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Vizag" },
        { label: "Usage/Application", value: "Building Construction" }
      ],
      description:
        "Vizag Fe 500D bars deliver dependable strength and flexibility for medium-duty RCC frames.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438263475/PM/IC/RZ/213683241/12mm-vizag-steel-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389008/BP/BV/CQ/213683241/12mm-vizag-steel-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389013/EL/FH/LI/213683241/12mm-vizag-steel-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm ARS TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438324217/PQ/MP/PR/213683241/25mm-ars-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438324217/PQ/MP/PR/213683241/25mm-ars-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 69 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "16mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "ARS" },
        { label: "Product Diameter", value: "25mm" }
      ],
      description:
        "Large diameter ARS bars provide earthquake resistance and corrosion protection for high-load RCC members.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438324217/PQ/MP/PR/213683241/25mm-ars-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388941/HA/LT/KB/213683241/25mm-ars-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388947/ZJ/RO/AH/213683241/25mm-ars-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm Amman Try TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438673773/VY/ZA/MQ/213683241/25mm-amman-try-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438673773/VY/ZA/MQ/213683241/25mm-amman-try-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 89 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Brand", value: "AMMAN TRY" },
        { label: "Usage", value: "Constructions" },
        { label: "Product Diameter", value: "25mm" },
        { label: "Material", value: "Carbon Steel" }
      ],
      description:
        "Amman-TRY FE 550 D rounds combine low phosphorus chemistry with superior ductility for bridges and heavy RCC.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438673773/VY/ZA/MQ/213683241/25mm-amman-try-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389272/IW/BC/SH/213683241/25mm-amman-try-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389280/HB/HM/QK/213683241/25mm-amman-try-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm Suryadev TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438338962/QI/XD/IM/213683241/8mm-suryadev-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438338962/QI/XD/IM/213683241/8mm-suryadev-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 58 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Diameter", value: "8 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Suryadev" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" }
      ],
      description:
        "Suryadev Fe 550D stirrups provide higher tensile strength and excellent bonding for wall and slab reinforcement.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438338962/QI/XD/IM/213683241/8mm-suryadev-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389323/OH/KS/UU/213683241/8mm-suryadev-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389326/CQ/YA/YY/213683241/8mm-suryadev-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm Tulsyan TMT Steel Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438660356/MX/AQ/WC/213683241/prod-20220307-142147786665-jpg-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438660356/MX/AQ/WC/213683241/prod-20220307-142147786665-jpg-1000x1000.jpg",
      price: "Approx. Rs 60 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 500D" },
        { label: "Diameter", value: "8 mm" },
        { label: "Single Piece Length", value: "6 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Product Brand", value: "Tulsyan" }
      ],
      description:
        "Tulsyan NEC Fe 500D rebars are ISO- and BIS-certified, delivering reliable strength and corrosion resistance.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438660356/MX/AQ/WC/213683241/prod-20220307-142147786665-jpg-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389479/UW/AF/DT/213683241/8mm-tulsyan-tmt-steel-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389480/CZ/WE/MT/213683241/8mm-tulsyan-tmt-steel-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm Tulsyan TMT Steel Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-500x500.jpg",
      price: "Approx. Rs 72 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 500" },
        { label: "Material", value: "Mild Steel" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Usage/Application", value: "Building Construction" },
        { label: "Product Brand", value: "Tulsyan" }
      ],
      description:
        "Tulsyan Fe 500 bars provide dependable tensile strength and quality for everyday building construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438662724/IP/ZI/IC/213683241/10mm-tulsyan-tmt-steel-bars-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389495/FA/HV/XM/213683241/10mm-tulsyan-tmt-steel-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389499/NO/HY/FI/213683241/10mm-tulsyan-tmt-steel-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm Tulsyan TMT Steel Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438664246/ES/YY/AD/213683241/12mm-tulsyan-tmt-steel-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438664246/ES/YY/AD/213683241/12mm-tulsyan-tmt-steel-bars-1000x1000.jpg",
      price: "Approx. Rs 60 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "12 mm" },
        { label: "Grade", value: "Fe 500" },
        { label: "Material", value: "Mild Steel" },
        { label: "Single Piece Length", value: "6 meter" },
        { label: "Usage/Application", value: "Building Construction" },
        { label: "Product Brand", value: "Tulsyan" }
      ],
      description:
        "Tulsyan NEC rebars combine strong tensile performance with BIS-certified quality for partition and wall reinforcement.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438664246/ES/YY/AD/213683241/12mm-tulsyan-tmt-steel-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389441/XB/UO/CD/213683241/12mm-tulsyan-tmt-steel-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389445/CO/HO/GC/213683241/12mm-tulsyan-tmt-steel-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm Suryadev TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438337500/UG/CI/QL/213683241/10mm-suryadev-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438337500/UG/CI/QL/213683241/10mm-suryadev-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 55 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Suryadev" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "Suryadev Fe 550D rebars provide higher tensile strength, excellent bonding, and superior re-bend properties for residential projects.",
      video: "https://www.youtube.com/watch?v=d1RuAqL_nYQ",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438337500/UG/CI/QL/213683241/10mm-suryadev-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/d1RuAqL_nYQ/sddefault.jpg"
      ]
    },
    {
      name: "8mm SAIL TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438240953/QT/VS/KD/213683241/cement-interlocking-paver-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438240953/QT/VS/KD/213683241/cement-interlocking-paver-block-1000x1000.jpg",
      price: "Approx. Rs 61 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550" },
        { label: "Diameter", value: "8 mm" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Brand", value: "SAIL" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" }
      ],
      description:
        "SAIL SeQR bars are rolled in integrated steel plants from virgin iron ore, giving home builders authentic Fe 550 strength.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438240953/QT/VS/KD/213683241/cement-interlocking-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389137/ZJ/UB/IG/213683241/8mm-sail-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389139/DQ/HV/LL/213683241/8mm-sail-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm SAIL TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438242688/VK/VO/AY/213683241/10mm-sail-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438242688/VK/VO/AY/213683241/10mm-sail-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 65 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 500" },
        { label: "Diameter", value: "10 mm" },
        { label: "Single Piece Length", value: "6 meter" },
        { label: "Brand", value: "SAIL" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "SAIL SeQR Fe 500 rebars deliver consistent strength and bonding thanks to advanced integrated steelmaking.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438242688/VK/VO/AY/213683241/10mm-sail-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389109/OW/BT/DP/213683241/10mm-sail-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389110/RG/BR/MU/213683241/10mm-sail-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm SAIL TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438254076/HS/EO/BB/213683241/interlocking-paver-blocks-500x500.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438254076/HS/EO/BB/213683241/interlocking-paver-blocks-500x500.jpg",
      price: "Approx. Rs 65 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550" },
        { label: "Diameter", value: "12 mm" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "SAIL" }
      ],
      description:
        "Virgin-ore SAIL bars offer authentic Fe 550 strength and excellent bonding for medium to heavy RCC members.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438254076/HS/EO/BB/213683241/interlocking-paver-blocks-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389092/XN/PV/XA/213683241/12mm-sail-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389093/FH/IL/XP/213683241/12mm-sail-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm SAIL TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438255623/OQ/CA/JC/213683241/25mm-sail-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438255623/OQ/CA/JC/213683241/25mm-sail-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 70 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Grade", value: "Fe 500" },
        { label: "Diameter", value: "25 mm" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "SAIL" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "SAIL 25 mm rounds furnish Fe 500 strength and long-term durability for core reinforcement in RCC columns and beams.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438255623/OQ/CA/JC/213683241/25mm-sail-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389069/IA/OG/UI/213683241/25mm-sail-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389071/KE/EY/XT/213683241/25mm-sail-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "10mm Kamachi TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438358909/MU/PK/YW/213683241/10mm-kamachi-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438358909/MU/PK/YW/213683241/10mm-kamachi-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 68 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "10 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "Kamachi" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "Kamachi Fe 550D rebars exceed BIS strength norms, offering excellent elongation and weldability for structural members.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438358909/MU/PK/YW/213683241/10mm-kamachi-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389341/SB/II/NP/213683241/10mm-kamachi-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389342/UC/FL/VR/213683241/10mm-kamachi-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm Kamachi TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438357674/YV/BG/LY/213683241/8mm-kamachi-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438357674/YV/BG/LY/213683241/8mm-kamachi-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 54 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Size", value: "8 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Diameter", value: "8 mm" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "Kamachi" },
        { label: "Usage", value: "Constructions" }
      ],
      description:
        "Kamachi stirrups provide high strength, superior welding, and up to 30% steel savings compared with ordinary bars.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438357674/YV/BG/LY/213683241/8mm-kamachi-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389361/BE/NI/EH/213683241/8mm-kamachi-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389366/ES/PM/VD/213683241/8mm-kamachi-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "12mm Kamachi TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438359337/DX/PR/EI/213683241/12mm-kamachi-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438359337/DX/PR/EI/213683241/12mm-kamachi-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 67 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "12 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "Kamachi" },
        { label: "Material", value: "Mild Steel" }
      ],
      description:
        "Kamachi Fe 550D rebars deliver excellent elongation, bend, and re-bend properties to help crews work faster on site.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438359337/DX/PR/EI/213683241/12mm-kamachi-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389251/YQ/GL/DD/213683241/12mm-kamachi-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389254/VE/BO/EZ/213683241/12mm-kamachi-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm Kamachi TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438360093/XP/LJ/YM/213683241/25mm-kamachi-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438360093/XP/LJ/YM/213683241/25mm-kamachi-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 75 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Diameter", value: "25 mm" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "Kamachi" },
        { label: "Usage", value: "Construction" }
      ],
      description:
        "Kamachi heavy rounds deliver high strength, bendability, and corrosion resistance for core RCC reinforcement.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438360093/XP/LJ/YM/213683241/25mm-kamachi-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389237/AR/DW/HF/213683241/25mm-kamachi-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389238/PP/YC/QK/213683241/25mm-kamachi-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "8mm Tata Tiscon SD TMT Bar",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-1000x1000.jpg",
      price: "Approx. Rs 65 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Grade", value: "Fe 550SD" },
        { label: "Diameter", value: "8 mm" },
        { label: "Material", value: "MIld Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "Tata Tiscon SD" },
        { label: "Length", value: "12 Meter" }
      ],
      description:
        "Tata Tiscon SD (Super Ductile) rebars deliver earthquake-ready performance with superior ductility and tensile strength.",
      video: "https://www.youtube.com/watch?v=YrWghl75AAw",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438267830/RY/MD/EA/213683241/8mm-tata-tiscon-tmt-bar-1000x1000.jpg",
        "https://img.youtube.com/vi/YrWghl75AAw/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388836/PC/RX/IY/213683241/8mm-tata-tiscon-sd-tmt-bar-1000x1000.png"
      ]
    },
    {
      name: "10mm Tata Tiscon SD TMT Bar",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438290982/UR/DW/VL/213683241/tata-tiscon-july-rebar-2-250x250.png",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438290982/UR/DW/VL/213683241/tata-tiscon-july-rebar-2-1000x1000.png",
      price: "Approx. Rs 68 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Grade", value: "Fe 550SD" },
        { label: "Diameter", value: "10 mm" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "Tata Tiscon SD" },
        { label: "Material", value: "MIld Steel" },
        { label: "Length", value: "9 Meter" }
      ],
      description:
        "Tata Tiscon SD rebars are engineered for seismic resilience, pairing high tensile strength with superior ductility.",
      video: "https://www.youtube.com/watch?v=YrWghl75AAw",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438290982/UR/DW/VL/213683241/tata-tiscon-july-rebar-2-1000x1000.png",
        "https://img.youtube.com/vi/YrWghl75AAw/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527388817/XE/IP/NS/213683241/10mm-tata-tiscon-sd-tmt-bar-1000x1000.png"
      ]
    },
    {
      name: "12mm Pulkit TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 65 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Brand", value: "Pulkit" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" },
        { label: "Diameter", value: "25 mm" }
      ],
      description:
        "Pulkit FE 550D rebars withstand bending, resist fire, and offer superior anti-corrosion properties thanks to advanced TMT processing.",
      video: "https://www.youtube.com/watch?v=X75yKafKDPs",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438352073/NM/FM/CH/213683241/12mm-pulkit-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/X75yKafKDPs/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438336930/JD/JJ/HE/213683241/25mm-suryadev-tmt-bars-1000x1000.jpg"
      ]
    },
    {
      name: "8mm Pulkit TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438341439/LK/IU/FY/213683241/8mm-pulkit-tmt-bars-250x250.jpeg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438341439/LK/IU/FY/213683241/8mm-pulkit-tmt-bars-1000x1000.jpeg",
      price: "Approx. Rs 56 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Diameter", value: "8 mm" },
        { label: "Single Piece Length", value: "12 meter" },
        { label: "Usage", value: "Constructions" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "Pulkit" }
      ],
      description:
        "Pulkit stirrups combine low carbon content, excellent ductility, and fine ribs for superior concrete bonding.",
      video: "https://www.youtube.com/watch?v=X75yKafKDPs",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438341439/LK/IU/FY/213683241/8mm-pulkit-tmt-bars-1000x1000.jpeg",
        "https://img.youtube.com/vi/X75yKafKDPs/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389153/ZO/HN/BW/213683241/8mm-pulkit-tmt-bars-1000x1000.png"
      ]
    },
    {
      name: "25mm Pulkit TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352813/BP/WE/NJ/213683241/25mm-pulkit-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438352813/BP/WE/NJ/213683241/25mm-pulkit-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 60 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Diameter", value: "25 mm" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Brand", value: "Pulkit" }
      ],
      description:
        "Pulkit heavy rounds pair superior strength with anti-corrosion properties for core RCC reinforcement.",
      video: "https://www.youtube.com/watch?v=X75yKafKDPs",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438352813/BP/WE/NJ/213683241/25mm-pulkit-tmt-bars-1000x1000.jpg",
        "https://img.youtube.com/vi/X75yKafKDPs/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438352818/MX/HX/ZQ/213683241/25mm-pulkit-tmt-bars-1000x1000.jpg"
      ]
    },
    {
      name: "10mm Pulkit TMT Bars",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
      price: "Approx. Rs 62 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "50 Kg" },
        { label: "Grade", value: "Fe 550D" },
        { label: "Single Piece Length", value: "9 meter" },
        { label: "Brand", value: "Pulkit" },
        { label: "Material", value: "Mild Steel" },
        { label: "Usage", value: "Constructions" },
        { label: "Diameter", value: "25 mm" }
      ],
      description:
        "Pulkit Fe 550D rebars deliver low carbon content, high ductility, and excellent bonding ribs for structural reliability.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438351399/PX/PE/VW/213683241/10mm-pulkit-tmt-bars-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389224/EQ/GL/ZO/213683241/10mm-pulkit-tmt-bars-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527389233/HW/DK/EZ/213683241/10mm-pulkit-tmt-bars-1000x1000.png"
      ]
    }
  ],
  "shuttering-plywood": [
    {
      name: "Mine Gold Film Faced Shuttering Plywood",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
      price: "Approx. Rs 68 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (sq ft)", value: "8x4" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Is It ISI Marked", value: "ISI Marked" },
        { label: "Brand", value: "Mine Gold" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Film-faced Mine Gold panels hold fresh concrete securely in place, resisting weather while stripping clean without bonding to the pour.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438681115/CM/JB/VL/213683241/mine-gold-shuttering-plywood-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392195/SO/TG/YR/213683241/mine-gold-film-faced-shuttering-plywood-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438681113/JU/OC/CK/213683241/mine-gold-shuttering-plywood-250x250.jpg"
      ]
    },
    {
      name: "Continental Film Faced Shuttering Plywood Board",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
      price: "Approx. Rs 46 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (sq ft)", value: "8x4" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Is It ISI Marked", value: "ISI Marked" },
        { label: "Brand", value: "Continental" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Gurjan-core Continental panels use WBP bonding to deliver a reusable, dimensionally stable formwork face for structural pours and paneling.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438683762/BD/HW/JI/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438684338/TB/IW/XN/213683241/12mm-continental-shuttering-plywood-board-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438683757/XY/AD/VV/213683241/12mm-continental-shuttering-plywood-board-250x250.jpg"
      ]
    },
    {
      name: "Potential Film Faced Shuttering Plywood Board",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-1000x1000.jpg",
      price: "Approx. Rs 40 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (sq ft)", value: "8x4" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Is It ISI Marked", value: "ISI Marked" },
        { label: "Brand", value: "Potential" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Potential film-faced sheets stack multiple hot-pressed veneers with WBP glue, boosting elasticity and hardness for wet-site shuttering.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392299/RE/HE/SJ/213683241/potential-film-faced-shuttering-plywood-board-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392300/NS/AD/UL/213683241/potential-film-faced-shuttering-plywood-board-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438687088/SC/ZO/XX/213683241/shuttering-plywood-250x250.jpg"
      ]
    },
    {
      name: "Reddot Ecotech Film Faced Shuttering Plywood Board",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438696001/CZ/IV/PI/213683241/redot-film-faced-shuttering-plywood-board-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438696001/CZ/IV/PI/213683241/redot-film-faced-shuttering-plywood-board-1000x1000.jpg",
      price: "Approx. Rs 53 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (sq ft)", value: "8x4" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Is It ISI Marked", value: "ISI Marked" },
        { label: "Brand", value: "Reddot Ecotech" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Red film-faced Reddot Ecotech boards use high-density timber and BWP resin to deliver extra strength and tight bonding for repeat pours.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438696001/CZ/IV/PI/213683241/redot-film-faced-shuttering-plywood-board-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392383/GE/SC/YP/213683241/reddot-ecotech-film-faced-shuttering-plywood-board-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392384/OR/CM/YU/213683241/reddot-ecotech-film-faced-shuttering-plywood-board-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438696001/CZ/IV/PI/213683241/redot-film-faced-shuttering-plywood-board-250x250.jpg"
      ]
    },
    {
      name: "Apollo Film Faced Shuttering Plywood Board",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438689779/ER/QE/LF/213683241/appolo-shuttering-plywood-board-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438689779/ER/QE/LF/213683241/appolo-shuttering-plywood-board-1000x1000.jpg",
      price: "Approx. Rs 48 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (sq ft)", value: "8x4" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Brand", value: "Apollo" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Apollo shuttering ply uses high-density timber pressed with BWP phenol formaldehyde resin for strong bonding and durable structural formwork.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438689779/ER/QE/LF/213683241/appolo-shuttering-plywood-board-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392525/MG/BE/SE/213683241/apollo-film-faced-shuttering-plywood-board-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438689779/ER/QE/LF/213683241/appolo-shuttering-plywood-board-250x250.jpg"
      ]
    },
    {
      name: "Cargo Film Faced Shuttering Plywood Board",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438691837/NM/JR/RU/213683241/cargo-filmface-shuttering-plyswood-board-1-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438691837/NM/JR/RU/213683241/cargo-filmface-shuttering-plyswood-board-1-1000x1000.jpg",
      price: "Approx. Rs 72 / sq ft",
      details: [
        { label: "Minimum Order Quantity", value: "50 sq ft" },
        { label: "Thickness", value: "12 mm" },
        { label: "Size (Sq ft)", value: "8x4" },
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Furniture" },
        { label: "Core Material", value: "Gurjan" },
        { label: "Brand", value: "Cargo" },
        { label: "Product Wood Type", value: "Plywood Board" }
      ],
      description:
        "Cargo film-face plywood provides carefully engineered shuttering panels that stop concrete leakage, remain dimensionally stable, and strip clean after curing.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438691837/NM/JR/RU/213683241/cargo-filmface-shuttering-plyswood-board-1-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438691840/KV/KD/RQ/213683241/cargo-filmface-shuttering-plywood-board-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438691837/NM/JR/RU/213683241/cargo-filmface-shuttering-plyswood-board-1-250x250.jpg"
      ]
    }
  ],
  "concrete-blocks": [
    {
      name: "8 Inch Solid Concrete Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438748772/BB/JX/JW/213683241/8-inch-solid-concrete-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438748772/BB/JX/JW/213683241/8-inch-solid-concrete-block-1000x1000.jpg",
      price: "Approx. Rs 60 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Fire Resistant" },
        { label: "Product Size", value: "16 in × 6 in × 8 in (L × W × H)" }
      ],
      description:
        "High-quality 8 inch concrete blocks weighing roughly 33–35 kg each. Supplied in 400-piece loads with delivery around Chennai for side and compound wall construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438748772/BB/JX/JW/213683241/8-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527580439/IW/QQ/EK/213683241/8-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527580449/FN/HS/EE/213683241/8-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438748772/BB/JX/JW/213683241/8-inch-solid-concrete-block-250x250.jpg"
      ]
    },
    {
      name: "4 Inch Solid Concrete Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438746298/ME/WC/ST/213683241/4-inch-solid-concrete-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438746298/ME/WC/ST/213683241/4-inch-solid-concrete-block-1000x1000.jpg",
      price: "Approx. Rs 40 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" },
        { label: "Product Size", value: "400 mm × 200 mm × 100 mm (L × W × H)" }
      ],
      description:
        "4 inch solid blocks for interior or exterior wall runs. Nominal size 4 × 8 × 16 inch with actual size 90 × 190 × 390 mm. Palletised in batches of 162 pieces.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438746298/ME/WC/ST/213683241/4-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527608046/ZQ/AL/IG/213683241/6-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527608037/HF/KC/JW/213683241/6-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438746298/ME/WC/ST/213683241/4-inch-solid-concrete-block-250x250.jpg"
      ]
    },
    {
      name: "6 Inch Solid Concrete Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438747622/WV/FC/MM/213683241/6-inch-solid-concrete-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438747622/WV/FC/MM/213683241/6-inch-solid-concrete-block-1000x1000.jpg",
      price: "Approx. Rs 50 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" },
        { label: "Product Size", value: "600 mm × 200 mm × 100 mm (L × W × H)" }
      ],
      description:
        "Standard 6 inch concrete blocks weighing about 26 kg each, suited for structural walling where balanced strength and weight are required.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438747622/WV/FC/MM/213683241/6-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527608037/HF/KC/JW/213683241/6-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527608046/ZQ/AL/IG/213683241/6-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438747622/WV/FC/MM/213683241/6-inch-solid-concrete-block-250x250.jpg"
      ]
    },
    {
      name: "10 Inch Solid Concrete Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438739096/QR/SC/AC/213683241/10-inch-solid-concrete-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438739096/QR/SC/AC/213683241/10-inch-solid-concrete-block-1000x1000.jpg",
      price: "Approx. Rs 20 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "10 Piece" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Water Resistant, Fire Resistant, Heat Resistant" },
        { label: "Product Size", value: "10 in × 4 in × 3 in (L × W × H)" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Rectangular 10 inch solid cement blocks supplied in small minimum order quantities for versatile walling applications.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438739096/QR/SC/AC/213683241/10-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527579867/DD/MU/XM/213683241/10-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527579880/WZ/FL/UF/213683241/10-inch-solid-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438739096/QR/SC/AC/213683241/10-inch-solid-concrete-block-250x250.jpg"
      ]
    },
    {
      name: "9 Inch Solid Concrete Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438730116/TF/CG/GU/213683241/9-inch-solid-concrete-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438730116/TF/CG/GU/213683241/9-inch-solid-concrete-block-1000x1000.jpg",
      price: "Approx. Rs 18 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "9 in × 4 in × 3 in" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Fire Resistant, Water Resistant, Heat Resistant" }
      ],
      description:
        "Non-branded 9 inch solid concrete blocks measuring 12 × 6 × 9 inch overall, delivering durable density for side wall construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438730116/TF/CG/GU/213683241/9-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438730117/UA/AD/LV/213683241/9-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438730120/CA/CR/CS/213683241/9-inch-solid-concrete-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438730116/TF/CG/GU/213683241/9-inch-solid-concrete-block-250x250.jpg"
      ]
    }
  ],
  "construction-sand": [
    {
      name: "Grey River Construction Sand",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438716309/LM/QI/BJ/213683241/grey-construction-river-sand-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438716309/LM/QI/BJ/213683241/grey-construction-river-sand-1000x1000.jpg",
      price: "Approx. Rs 1,200 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "10 Tonne" },
        { label: "Color", value: "Brown" },
        { label: "Packaging Size", value: "50 kg" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Grade", value: "A Grade" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Product Type", value: "River Sand" }
      ],
      description:
        "Fine quality river sand sourced from banks and streams, ideal for concrete and masonry work thanks to its clean, white-grey grading.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438716309/LM/QI/BJ/213683241/grey-construction-river-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438716313/NO/XA/FC/213683241/grey-construction-river-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438716318/ZU/WL/LV/213683241/grey-construction-river-sand-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438716309/LM/QI/BJ/213683241/grey-construction-river-sand-250x250.jpg"
      ]
    },
    {
      name: "Rough Construction Sand",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438718809/EJ/SP/AD/213683241/images-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438718809/EJ/SP/AD/213683241/images-1000x1000.jpg",
      price: "Approx. Rs 800 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "50 Tonne" },
        { label: "Type", value: "Rough Sand" },
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Standard", value: "ISI" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Grade", value: "A Grade" }
      ],
      description:
        "Coarse-textured concrete sand processed to remove impurities, delivering strong foundations, driveways, and structural slabs.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438718809/EJ/SP/AD/213683241/images-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438718810/FF/VM/MI/213683241/images-1-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527576738/XS/FV/NR/213683241/rough-construction-sand-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438718809/EJ/SP/AD/213683241/images-250x250.jpg"
      ]
    },
    {
      name: "Brown Rubbish Construction Sand",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438721019/KP/TX/FK/213683241/brown-rubbish-sand-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438721019/KP/TX/FK/213683241/brown-rubbish-sand-1000x1000.jpg",
      price: "Approx. Rs 25 / Cubic Feet",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Feet" },
        { label: "Type", value: "Thick sand" },
        { label: "Color", value: "Brown" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Grade", value: "A Grade" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Form", value: "Powder" }
      ],
      description:
        "Brown river sand option prized for its attractive finish and easy masonry placement on landscaping or non-structural builds.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438721019/KP/TX/FK/213683241/brown-rubbish-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527577467/AH/TK/LN/213683241/brown-rubbish-construction-sand-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527578961/CI/BL/QB/213683241/brown-rubbish-construction-sand-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438721019/KP/TX/FK/213683241/brown-rubbish-sand-250x250.jpg"
      ]
    },
    {
      name: "Gray Construction P Sand",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438708687/DZ/BW/OA/213683241/gray-construction-p-sand-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438708687/DZ/BW/OA/213683241/gray-construction-p-sand-500x500.jpg",
      price: "Approx. Rs 1,100 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "50 Tonne" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Type", value: "P Sand" },
        { label: "Standard", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Form", value: "Powder" },
        { label: "Water Absorption", value: "8%" },
        { label: "Yield", value: "2%" }
      ],
      description:
        "Screened plaster sand delivering consistent gradation for smooth renders and fine finishing work on site.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438708687/DZ/BW/OA/213683241/gray-construction-p-sand-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438714798/OX/RH/AZ/213683241/gray-construction-p-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438714800/DE/LF/DY/213683241/gray-construction-p-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438708687/DZ/BW/OA/213683241/gray-construction-p-sand-250x250.jpg"
      ]
    },
    {
      name: "Gray Construction M Sand",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438710096/BT/PJ/VU/213683241/crushed-powdser-m-sand-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438710096/BT/PJ/VU/213683241/crushed-powdser-m-sand-1000x1000.jpg",
      price: "Approx. Rs 1,000 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "50 Tonne" },
        { label: "Grade", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Product Type", value: "M Sand" },
        { label: "Form", value: "Powder" }
      ],
      description:
        "Manufactured M-sand made from crushed granite, offering uniform quality and sustainable supply for structural concrete mixes.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438710096/BT/PJ/VU/213683241/crushed-powdser-m-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438710091/ZS/ZM/KO/213683241/crushed-powssder-m-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438710098/MC/RX/QC/213683241/crushed-powder-m-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438710096/BT/PJ/VU/213683241/crushed-powdser-m-sand-250x250.jpg"
      ]
    }
  ],
  "ready-mix-concrete": [
    {
      name: "M15 Ready Mixed Concrete",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-1000x1000.jpg",
      price: "Approx. Rs 5,200 / Cubic Meter",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Meter" },
        { label: "Concrete Grade", value: "M25" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Grade", value: "M15" },
        { label: "Usage", value: "Constructions" },
        { label: "Color", value: "Grey" },
        { label: "Product Type", value: "Ready Mix Concrete" }
      ],
      description:
        "M15 mix uses a 1:2:4 cement-sand-aggregate proportion with roughly 317 kg of cement per cubic meter, delivering balanced compressive strength and workability for general construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392817/NK/BC/HK/213683241/m15-ready-mixed-concrete-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527392819/BV/TC/ON/213683241/m15-ready-mixed-concrete-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438892871/SB/LP/AJ/213683241/m15-ready-mixed-concrete-250x250.jpg"
      ]
    },
    {
      name: "M20 Ready Mix Concrete",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-250x250.jpeg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-1000x1000.jpeg",
      price: "Approx. Rs 5,500 / Cubic Meter",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Meter" },
        { label: "Concrete Grade", value: "M20" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Usage", value: "Constructions" },
        { label: "Color", value: "Grey" },
        { label: "Product Type", value: "Ready Mix Concrete" },
        { label: "Density", value: "1440 kg/m3" }
      ],
      description:
        "M20 ready-mix concrete delivers 20 MPa strength for structural elements, supplied in loose form for efficient pumping and placement.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438879303/TT/DH/VN/213683241/ready-mix-concrete-250x250.jpeg"
      ]
    },
    {
      name: "M30 Ready Mix Concrete",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893564/LU/YJ/QM/213683241/m30-ready-mix-concrete-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893564/LU/YJ/QM/213683241/m30-ready-mix-concrete-1000x1000.jpg",
      price: "Approx. Rs 6,100 / Cubic Meter",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Meter" },
        { label: "Concrete Grade", value: "M30" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Product Type", value: "Ready Mix Concrete" },
        { label: "Usage", value: "Constructions" },
        { label: "Color", value: "Grey" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "M30 grade mixes use a 1:0.75:1.5 cement:sand:aggregate ratio to achieve 30 MPa compressive strength for demanding structural members.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438893564/LU/YJ/QM/213683241/m30-ready-mix-concrete-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438893564/LU/YJ/QM/213683241/m30-ready-mix-concrete-250x250.jpg"
      ]
    },
    {
      name: "M10 Ready Mix Concrete",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-1000x1000.jpg",
      price: "Approx. Rs 4,900 / Cubic Meter",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Meter" },
        { label: "Concrete Grade", value: "M10" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Usage", value: "Constructions" },
        { label: "Color", value: "Grey" },
        { label: "Product Type", value: "Ready Mix Concrete" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Lean M10 concrete mix provided in bulk for blinding and leveling layers ahead of structural pours.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438892620/SY/AK/KJ/213683241/m10-ready-mix-concrete-250x250.jpg"
      ]
    },
    {
      name: "M25 Ready Mix Concrete",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-1000x1000.jpg",
      price: "Approx. Rs 5,800 / Cubic Meter",
      details: [
        { label: "Minimum Order Quantity", value: "50 Cubic Meter" },
        { label: "Concrete Grade", value: "M25" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Product Type", value: "Ready Mix Concrete" },
        { label: "Usage", value: "Constructions" },
        { label: "Color", value: "Grey" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "M25 ready-mix concrete offers 25 MPa compressive strength with a 1:1:2 mix, suited for columns, beams, and slabs requiring higher performance.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438893212/TQ/EX/VN/213683241/m25-ready-mix-concrete-250x250.jpg"
      ]
    }
  ],
  "construction-aggregates": [
    {
      name: "12mm Crushed Stone Aggregate",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438723772/KB/AR/ZN/213683241/12mm-blue-maetal-aggregate-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438723772/KB/AR/ZN/213683241/12mm-blue-maetal-aggregate-1000x1000.jpg",
      price: "Approx. Rs 900 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "10 Tonne" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Standard", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Form", value: "Solid" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Thickness", value: "12mm" }
      ],
      description:
        "12 mm crushed blue metal aggregate for structural concrete, offering dependable grading and clean bulk delivery for construction projects.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438723772/KB/AR/ZN/213683241/12mm-blue-maetal-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438723775/MO/UZ/WF/213683241/12mm-blue-mestal-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438723776/FH/EB/EX/213683241/12mm-blue-metal-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438723772/KB/AR/ZN/213683241/12mm-blue-maetal-aggregate-250x250.jpg"
      ]
    },
    {
      name: "20mm Crushed Stone Aggregate",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438725785/OU/PK/LM/213683241/12mm-construction-crushed-stone-aggregate-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438725785/OU/PK/LM/213683241/12mm-construction-crushed-stone-aggregate-1000x1000.jpg",
      price: "Approx. Rs 900 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "10 Tonne" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Type", value: "Aggregate" },
        { label: "Standard", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Form", value: "Solid" },
        { label: "Yield", value: "95%" },
        { label: "Thickness", value: "20mm" }
      ],
      description:
        "20 mm crushed stone aggregate supplied loose for high-performance concrete and road base mixes with consistent yield.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438725785/OU/PK/LM/213683241/12mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438725787/UU/HR/DV/213683241/12mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438725789/NZ/JQ/UE/213683241/12mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438725785/OU/PK/LM/213683241/12mm-construction-crushed-stone-aggregate-250x250.jpg"
      ]
    },
    {
      name: "40mm Crushed Stone Aggregate",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438726988/UH/DD/GZ/213683241/40mm-construction-crushed-stone-aggregate-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438726988/UH/DD/GZ/213683241/40mm-construction-crushed-stone-aggregate-1000x1000.jpg",
      price: "Approx. Rs 900 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "10 Tonne" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Type", value: "Aggregate" },
        { label: "Standard", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Form", value: "Solid" },
        { label: "Yield", value: "92%" },
        { label: "Thickness", value: "40mm" }
      ],
      description:
        "40 mm coarse aggregate for heavy-duty concrete, drainage layers, and road sub-base applications requiring larger stone fractions.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438726988/UH/DD/GZ/213683241/40mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438726990/PP/CA/TZ/213683241/40mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438726995/WX/WH/DE/213683241/40mm-construction-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438726988/UH/DD/GZ/213683241/40mm-construction-crushed-stone-aggregate-250x250.jpg"
      ]
    },
    {
      name: "6mm Crushed Stone Aggregate",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438918639/JW/ZN/NG/213683241/6mm-crushed-stone-aggregate-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438918639/JW/ZN/NG/213683241/6mm-crushed-stone-aggregate-1000x1000.jpg",
      price: "Approx. Rs 900 / Tonne",
      details: [
        { label: "Minimum Order Quantity", value: "10 Tonne" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Type", value: "Crushed Stone" },
        { label: "Standard", value: "A Grade" },
        { label: "Color", value: "Gray" },
        { label: "Form", value: "Solid" },
        { label: "Thickness", value: "6mm" }
      ],
      description:
        "6 mm crushed stone aggregates for thin screeds, precast concrete, and as a fine layer in asphalt and ballast applications.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438918639/JW/ZN/NG/213683241/6mm-crushed-stone-aggregate-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438918639/JW/ZN/NG/213683241/6mm-crushed-stone-aggregate-250x250.jpg"
      ]
    }
  ],
  "concrete-hollow-blocks": [
    {
      name: "4 Inch Concrete Hollow Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438755592/RV/CK/XW/213683241/4-inch-concrete-hollow-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438755592/RV/CK/XW/213683241/4-inch-concrete-hollow-block-1000x1000.jpg",
      price: "Approx. Rs 30 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "10 Piece" },
        { label: "Size", value: "16 inches x 8 inches x 4 inches" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Brown" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Hollow" },
        { label: "Resistance Durability", value: "Water Resistant, Heat Resistant, Fire Resistant" }
      ],
      description:
        "Nominal 4 inch hollow concrete block for interior and exterior walls, sized 90 × 190 × 390 mm with multi-hazard resistance.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438755592/RV/CK/XW/213683241/4-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527581405/KT/QV/MN/213683241/4-inch-concrete-hollow-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527581409/GT/HQ/JQ/213683241/4-inch-concrete-hollow-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438755592/RV/CK/XW/213683241/4-inch-concrete-hollow-block-250x250.jpg"
      ]
    },
    {
      name: "8 Inch Concrete Hollow Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438754165/DY/VY/RW/213683241/8-inch-concrete-hollow-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438754165/DY/VY/RW/213683241/8-inch-concrete-hollow-block-1000x1000.jpg",
      price: "Approx. Rs 50 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "16 inches x 8 inches x 8 inches" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Hollow" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" }
      ],
      description:
        "Standard 8 inch hollow concrete block manufactured with Portland cement, sand, gravel, and water for structural walls.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438754165/DY/VY/RW/213683241/8-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438753568/JG/TR/KQ/213683241/8-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438753667/ND/JF/IG/213683241/8-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438754165/DY/VY/RW/213683241/8-inch-concrete-hollow-block-250x250.jpg"
      ]
    },
    {
      name: "6 Inch Concrete Hollow Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438755219/HU/NU/JN/213683241/6-inch-concrete-hollow-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438755219/HU/NU/JN/213683241/6-inch-concrete-hollow-block-1000x1000.jpg",
      price: "Approx. Rs 35 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "16 inches x 8 inches x 6 inches" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Hollow" },
        { label: "Resistance Durability", value: "Fire Resistant, Heat Resistant, Water Resistant" }
      ],
      description:
        "6 inch hollow blocks suited for compound walls and temporary partitions with durable fire, heat, and water resistance.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438755219/HU/NU/JN/213683241/6-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438754571/IC/SS/CG/213683241/6-inch-concrete-hollow-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438755219/HU/NU/JN/213683241/6-inch-concrete-hollow-block-250x250.jpg"
      ]
    }
  ],
  "clay-bricks": [
    {
      name: "Red Chamber Clay Bricks",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-1000x1000.jpg",
      price: "Approx. Rs 10 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "9 in x 4 in x 3 in" },
        { label: "Shape", value: "Rectangular" },
        { label: "Color", value: "Red" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Resistance Durability", value: "Water Resistant, Heat Resistant, Fire Resistant" },
        { label: "Material", value: "Clay" }
      ],
      description:
        "Kiln-fired chamber clay bricks offering classic red color, rectangular geometry, and multi-hazard resistance for wall construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438757566/UK/MO/FT/213683241/chamber-bricks-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438757207/KF/UW/HS/213683241/chamber-bricks-250x250.jpg"
      ]
    },
    {
      name: "Red Clay Brick",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-1000x1000.jpg",
      price: "Approx. Rs 11 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "9 in x 4 in x 3 in" },
        { label: "Color", value: "Red" },
        { label: "Shape", value: "Rectangular" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Resistance Durability", value: "Water Resistant, Fire Resistant, Heat Resistant" },
        { label: "Eco Friendly", value: "Yes" }
      ],
      description:
        "Traditional red clay bricks pressed and kiln-fired, valued for durability and natural thermal performance in load-bearing walls.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438761358/RZ/DE/IE/213683241/clay-red-box-bricks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438761042/NN/KI/GM/213683241/clay-red-box-bricks-250x250.jpg"
      ]
    }
  ],
  "ash-bricks": [
    {
      name: "Grey Fly Ash Bricks",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-1000x1000.jpg",
      price: "Approx. Rs 20 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "9 in x 4 in x 3 in" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Usage/Application", value: "Side Walls" },
        {
          label: "Resistance Durability",
          value: "Heat Resistant, Water Resistant, Fire Resistant"
        },
        { label: "Eco Friendly", value: "Yes" }
      ],
      description:
        "Grey fly ash bricks molded for partition or side walls, providing heat, water, and fire resistance with eco-friendly composition.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438762438/DT/MQ/FX/213683241/rectangular-fly-ash-brick-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438762445/CD/ZR/FI/213683241/fly-ash-bricks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438762440/XM/RP/HK/213683241/fly-ash-bricks-250x250.jpg"
      ]
    }
  ],
  "hume-pipes": [
    {
      name: "1200mm RCC Hume Pipes",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
      price: "Approx. Rs 15,000 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "10 Piece" },
        { label: "Size/Diameter", value: "1200 mm" },
        { label: "Type", value: "Hume Pipes" },
        { label: "Size", value: "2.5m (L)" },
        { label: "Class", value: "NP3" },
        {
          label: "Usage/Application",
          value: "For Water Drainage, Sewerage, Culverts And Irrigation"
        },
        { label: "Material", value: "RCC" },
        { label: "Thickness", value: "120mm" }
      ],
      description:
        "NP3 class RCC Hume pipes in 1200 mm diameter and 2.5 m length engineered for drainage, sewerage, culvert, and irrigation applications.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438365074/EY/KU/UU/213683241/product-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527390592/VQ/IV/NU/213683241/1200mm-rcc-hume-pipes-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438366114/ON/YH/ER/213683241/1200mm-rcc-hume-pipes-250x250.jpg"
      ]
    }
  ],
  "ready-mix-plaster": [
    {
      name: "Preplast Cement Plaster Admixture",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-250x250.jpeg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-1000x1000.jpeg",
      price: "Approx. Rs 800 / Kg",
      details: [
        { label: "Minimum Order Quantity", value: "10 Kg" },
        { label: "Packaging Size", value: "25 Kg" },
        { label: "Usage/Application", value: "Construction" },
        { label: "Color", value: "Grey" },
        { label: "Packaging Type", value: "Packet" },
        { label: "Shelf Life", value: "3 Months" },
        { label: "Product Packaging Size", value: "250g" }
      ],
      description:
        "Preplast cement plaster admixture improves workability, durability, and strength in construction mixes, supplied in 25 kg packets.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438879720/BG/WT/UD/213683241/whatsapp-image-2024-07-30-at-11-52-10-am-1000x1000.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438879716/OL/RN/BD/213683241/whatsapp-image-2024-07-30-at-11-52-24-am-250x250.jpeg"
      ]
    }
  ],
  "m-sand": [
    {
      name: "Plastering M Sand",
      image: "https://5.imimg.com/data5/ANDROID/Default/2025/1/482444460/MO/QH/ZB/213683241/product-jpeg-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/ANDROID/Default/2025/1/482444460/MO/QH/ZB/213683241/product-jpeg-1000x1000.jpg",
      price: "Approx. Rs 60 / Cubic Feet",
      details: [
        { label: "Grade", value: "A Grade" },
        { label: "Packaging Type", value: "Loose" },
        { label: "Wash Type", value: "Double Wash" },
        { label: "Color", value: "Gray" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Usages", value: "Construction" }
      ],
      description: "Double-washed plastering M-sand supplied loose for construction finishing applications.",
      gallery: [
        "https://5.imimg.com/data5/ANDROID/Default/2025/1/482444460/MO/QH/ZB/213683241/product-jpeg-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438708680/VH/EX/NW/213683241/gray-construction-p-sand-1000x1000.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2025/1/482444460/MO/QH/ZB/213683241/product-jpeg-250x250.jpg"
      ]
    }
  ],
  "paver-blocks": [
    {
      name: "Red Zig Zag Cement Paver Blocks",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-1000x1000.jpg",
      price: "Approx. Rs 25 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "10 Piece" },
        { label: "Thickness", value: "60 mm" },
        { label: "Color", value: "Red" },
        { label: "Dimensions", value: "250 mm x 125 mm (L × W)" },
        { label: "Surface Finishing", value: "Matte" },
        { label: "Material", value: "Cement" },
        { label: "Suitability", value: "Floor" }
      ],
      description:
        "Red zig-zag interlocking pavers, sized to cover roughly one square foot per piece, provide durable cement flooring in a bold tone.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527581985/MR/JB/BQ/213683241/red-zig-zag-cement-paver-blocks-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527581986/WF/EW/OQ/213683241/red-zig-zag-cement-paver-blocks-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438735821/UQ/XM/IZ/213683241/red-zig-zag-paver-blocks-250x250.jpg"
      ]
    },
    {
      name: "Red I Shape Concrete Paver Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-1000x1000.jpg",
      price: "Approx. Rs 30 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Thickness", value: "60 mm" },
        { label: "Color", value: "Red" },
        { label: "Shape", value: "I Shaped" },
        { label: "Surface Finishing", value: "Matte" },
        { label: "Material", value: "Concrete" },
        { label: "Dimensions", value: "225 mm x 175 mm (L × W)" },
        { label: "Usage/Application", value: "Flooring" }
      ],
      description:
        "Red I-shaped concrete pavers in a 60 mm thickness deliver interlocking performance for driveways and outdoor flooring.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438738020/KN/HW/SD/213683241/red-i-shape-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527580341/JN/KK/JJ/213683241/red-i-shape-concrete-paver-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438738016/SW/CZ/HP/213683241/red-i-shape-concrete-paver-block-250x250.jpg"
      ]
    },
    {
      name: "I Shape Grey Concrete Paver Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438732206/XD/CF/YV/213683241/i-shape-grey-concrete-paver-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438732206/XD/CF/YV/213683241/i-shape-grey-concrete-paver-block-1000x1000.jpg",
      price: "Approx. Rs 35 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Thickness", value: "60 mm" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "I Shaped" },
        { label: "Surface Finishing", value: "Matte" },
        { label: "Dimensions", value: "225 mm x 175 mm (L × W)" },
        { label: "Usage/Application", value: "Flooring" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Grey I-shaped concrete paver blocks crafted for heavy-duty interlocking surfaces with a neutral aesthetic.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438732206/XD/CF/YV/213683241/i-shape-grey-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438732210/VC/YU/BL/213683241/i-shape-grey-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438732211/AF/QM/HQ/213683241/i-shape-grey-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438732206/XD/CF/YV/213683241/i-shape-grey-concrete-paver-block-250x250.jpg"
      ]
    },
    {
      name: "Grey Zig Zag Concrete Paver Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438731143/JP/KU/XW/213683241/grey-zig-zag-concrete-paver-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438731143/JP/KU/XW/213683241/grey-zig-zag-concrete-paver-block-1000x1000.jpg",
      price: "Approx. Rs 30 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Thickness", value: "60 mm" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Zig-Zag" },
        { label: "Surface Finishing", value: "Matte" },
        { label: "Usage/Application", value: "Floor" },
        { label: "Dimensions", value: "250 mm x 125 mm (L × W)" },
        { label: "Material", value: "Cement" }
      ],
      description:
        "Grey zig-zag pavers add a precise interlocking pattern and smooth matte finish for walkways and landscape hardscapes.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438731143/JP/KU/XW/213683241/grey-zig-zag-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438731145/YT/XS/KW/213683241/grey-zig-zag-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438731146/WU/MB/ML/213683241/grey-zig-zag-concrete-paver-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438731143/JP/KU/XW/213683241/grey-zig-zag-concrete-paver-block-250x250.jpg"
      ]
    }
  ],
  "aac-blocks": [
    {
      name: "6 Inch Fusion Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 84 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Size", value: "600 mm x 200 mm x 150 mm" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" },
        { label: "Brand", value: "Fusion" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Fusion AAC Blocks are lightweight, precast concrete units widely used for internal and external construction by an ISO 9001-2015 certified company registered with GRIHA.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438843551/QN/MW/YV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.jpg",
        "https://img.youtube.com/vi/FTp_Y9Je4tI/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png"
      ],
      video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI"
    },
    {
      name: "4 Inch Fusion Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438844926/HH/ST/VK/213683241/4-inch-fusion-concrete-aac-block-250x250.jpeg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438844926/HH/ST/VK/213683241/4-inch-fusion-concrete-aac-block-1000x1000.jpeg",
      price: "Approx. Rs 47 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Size", value: "600 mm x 200 mm x 100 mm" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" },
        { label: "Brand", value: "Fusion" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Fusion AAC Blocks keep partitions lightweight while offering excellent fire, water and heat resistance for durable wall assemblies.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438844926/HH/ST/VK/213683241/4-inch-fusion-concrete-aac-block-1000x1000.jpeg",
        "https://img.youtube.com/vi/FTp_Y9Je4tI/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609060/DH/VD/JM/213683241/4-inch-fusion-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609063/YZ/ES/NY/213683241/4-inch-fusion-concrete-aac-block-1000x1000.png"
      ],
      video: "https://www.youtube.com/watch?v=FTp_Y9Je4tI"
    },
    {
      name: "4 Inch NCL Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438877825/JD/MP/IP/213683241/4-inch-ncl-concrete-aac-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438877825/JD/MP/IP/213683241/4-inch-ncl-concrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 70 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 100 mm" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Water Resistant, Fire Resistant" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "NCL AAC Blocks supply lightweight concrete wall panels ideal for high-performance partitions with reliable insulation.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438877825/JD/MP/IP/213683241/4-inch-ncl-concrete-aac-block-1000x1000.jpg",
        "https://img.youtube.com/vi/kTRaXvWny_I/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527607950/NM/PL/NP/213683241/4-inch-ncl-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527607951/MY/XK/XU/213683241/4-inch-ncl-concrete-aac-block-1000x1000.png"
      ],
      video: "https://www.youtube.com/watch?v=kTRaXvWny_I"
    },
    {
      name: "6 Inch NCL Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438898543/NC/BE/ES/213683241/6-inch-ncl-concrete-aac-block-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438898543/NC/BE/ES/213683241/6-inch-ncl-concrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 79 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 150 mm" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Fire Resistant, Heat Resistant, Water Resistant" },
        { label: "Brand", value: "NCL" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Autoclaved NCL AAC Blocks combine light weight with dependable fire, heat and water resistance for durable side-wall construction.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438898543/NC/BE/ES/213683241/6-inch-ncl-concrete-aac-block-1000x1000.jpg",
        "https://img.youtube.com/vi/kTRaXvWny_I/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618380/TR/IK/ES/213683241/6-inch-ncl-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618387/XE/QR/JN/213683241/6-inch-ncl-concrete-aac-block-1000x1000.png"
      ],
      video: "https://www.youtube.com/watch?v=kTRaXvWny_I"
    },
    {
      name: "4 Inch Kamcrete Light Weight AAC Blocks",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-250x250.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
      price: "Approx. Rs 79 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 100 mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Fire Resistant, Heat Resistant, Water Resistant" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Kamcrete AAC Blocks are autoclaved aerated concrete units that simplify lightweight partition construction while improving acoustic and thermal comfort.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438904335/EI/UF/SY/213683241/4-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609410/RE/JO/XK/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609404/TX/OA/TF/213683241/6-inch-ecocon-aac-concrete-block-1000x1000.png"
      ]
    },
    {
      name: "8 Inch Fusion Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843018/HG/YH/PU/213683241/8-inch-fusion-concrete-aac-block-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438843018/HG/YH/PU/213683241/8-inch-fusion-concrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 110 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Size", value: "600 mm x 200 mm x 200 mm" },
        { label: "Usage/Application", value: "Side Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Water Resistant, Heat Resistant, Fire Resistant" },
        { label: "Brand", value: "Fusion" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Fusion AAC Blocks deliver outstanding thermal insulation and rapid buildability for thicker external wall sections.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438843018/HG/YH/PU/213683241/8-inch-fusion-concrete-aac-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609179/MF/CZ/KB/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527609172/OO/BA/MV/213683241/6-inch-fusion-concrete-aac-block-1000x1000.png"
      ]
    },
    {
      name: "9 Inch NCL Concrete AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438900731/JX/AF/KZ/213683241/9-inch-ncl-concrete-aac-block-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438900731/JX/AF/KZ/213683241/9-inch-ncl-concrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 110 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 250 mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Heat Resistant, Fire Resistant, Water Resistant" },
        { label: "Brand", value: "NCL" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "NCL AAC Blocks support tall partitions with a cellular structure that reduces heat and sound transfer while keeping loads low.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438900731/JX/AF/KZ/213683241/9-inch-ncl-concrete-aac-block-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618460/IR/PN/SJ/213683241/9-inch-ncl-concrete-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618463/XR/XP/YJ/213683241/9-inch-ncl-concrete-aac-block-1000x1000.png"
      ]
    },
    {
      name: "6 Inch Kamcrete Light Weight AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438904142/QK/QS/TU/213683241/6-inch-kamcrete-light-weight-aac-block-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438904142/QK/QS/TU/213683241/6-inch-kamcrete-light-weight-aac-block-1000x1000.jpg",
      price: "Approx. Rs 82 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 150 mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Water Resistant, Fire Resistant, Heat Resistant" },
        { label: "Brand", value: "Kamcrete" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Kamcrete AAC Blocks in a 6 inch thickness deliver consistent cellular concrete performance with balanced insulation and strength for partitions.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438904142/QK/QS/TU/213683241/6-inch-kamcrete-light-weight-aac-block-1000x1000.jpg"
      ]
    },
    {
      name: "9 Inch Kamcrete Light Weight AAC Blocks",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438903066/TZ/XD/RF/213683241/9-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438903066/TZ/XD/RF/213683241/9-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg",
      price: "Approx. Rs 110 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "50 Piece" },
        { label: "Size", value: "600mm x 200mm x 250 mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Water Resistant, Heat Resistant, Fire Resistant" },
        { label: "Brand", value: "Kamcrete" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Kamcrete's 9 inch AAC blocks support premium walling systems with enhanced acoustic comfort and reduced structural loading.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438903066/TZ/XD/RF/213683241/9-inch-kamcrete-light-weight-aac-blocks-1000x1000.jpg"
      ]
    },
    {
      name: "8 Inch ECOCON AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438776241/BS/GO/RZ/213683241/8-inch-ecocon-aac-block-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438776241/BS/GO/RZ/213683241/8-inch-ecocon-aac-block-1000x1000.jpg",
      price: "Approx. Rs 85 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 200mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Water Resistant, Heat Resistant, Fire Resistant" },
        { label: "Brand", value: "ECOCON" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "ECOCON 8 inch AAC blocks deliver durable cellular concrete with strong fire and moisture resistance for thicker wall profiles.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438776241/BS/GO/RZ/213683241/8-inch-ecocon-aac-block-1000x1000.jpg"
      ]
    },
    {
      name: "6 Inch Solid AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438767965/ED/DC/EY/213683241/6-inch-cubecrete-aac-block-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438767965/ED/DC/EY/213683241/6-inch-cubecrete-aac-block-1000x1000.jpg",
      price: "Approx. Rs 52 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 150 mm" },
        { label: "Usage/Application", value: "Partition Walls" },
        { label: "Color", value: "Grey" },
        { label: "Shape", value: "Rectangular" },
        { label: "Design", value: "Solid" },
        { label: "Resistance Durability", value: "Fire Resistant, Heat Resistant, Water Resistant" },
        { label: "Brand", value: "Cubecrete" },
        { label: "Material", value: "Concrete" }
      ],
      description:
        "Cubecrete's solid AAC block provides structure, insulation and fire protection in one lightweight panel, improving workability on site.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438767965/ED/DC/EY/213683241/6-inch-cubecrete-aac-block-1000x1000.jpg"
      ]
    },
    {
      name: "9 Inch Renacon Light Weight AAC Block",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438779935/IC/AF/LZ/213683241/prod-20201224-16213085116102pg-1-1000x1000.jpg",
      hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438779935/IC/AF/LZ/213683241/prod-20201224-16213085116102pg-1-1000x1000.jpg",
      price: "Approx. Rs 130 / Piece",
      details: [
        { label: "Minimum Order Quantity", value: "100 Piece" },
        { label: "Size", value: "600mm x 200mm x 230 mm" },
        { label: "Brand", value: "Renacon" },
        { label: "Features", value: "Light Weight" },
        { label: "Shape", value: "Rectangular" },
        { label: "Color", value: "Grey" },
        { label: "Design", value: "Solid" }
      ],
      description:
        "Renacon AAC blocks are lightweight, load-bearing and highly insulating, enabling faster, safer construction with reduced dead load.",
      gallery: [
        "https://5.imimg.com/data5/SELLER/Default/2024/7/438779935/IC/AF/LZ/213683241/prod-20201224-16213085116102pg-1-1000x1000.jpg",
        "https://img.youtube.com/vi/9JLXdwy078c/sddefault.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618125/AM/EM/WL/213683241/9-inch-renacon-light-weight-aac-block-1000x1000.png",
        "https://5.imimg.com/data5/SELLER/Default/2025/7/527618129/VF/AB/UQ/213683241/9-inch-renacon-light-weight-aac-block-1000x1000.png"
      ],
      video: "https://www.youtube.com/watch?v=9JLXdwy078c"
    }
  ]
};

scrapedProducts["construction-cement"] = [
  {
    name: "50Kg Ramco Super Grade Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-1000x1000.jpg",
    price: "Approx. Rs 305 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438851629/JS/HK/EP/213683241/50kg-ramco-super-grade-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/hZMeaVp7meo/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390416/JN/YT/JZ/213683241/50kg-ramco-super-grade-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390417/EK/TM/FW/213683241/50kg-ramco-super-grade-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Certified By", value: "ISI" },
      { label: "Brand", value: "Ramco" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Usage", value: "Construction" }
    ],
    description:
      "Ramco Cements Super Grade is a PPC grade cement manufactured as per IS 1489 (Part 1):1991. Ramco Cements Super Grade is produced either by grinding together Portland cement clinker and pozzolana with addition of gypsum or calcium sulphate, or by intimately and uniformly blending Portland cement and fine pozzolana. World over Ramco Cements Super Grade is preferred due to its ability to produce a durable concrete where the life of a concrete structure is given more importance. Ramco Cements Super Grade produces less heat of hydration and offers greater resistance to the attack of aggressive waters than normal Portland cement. Moreover, it reduces the leaching of calcium hydroxide liberated during the setting and hydration of cement."
  },
  {
    name: "50Kg UltraTech Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-1000x1000.jpg",
    price: "Approx. Rs 300 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438854095/GB/PH/AA/213683241/50kg-ultratech-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/LiQaMWGCS3E/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390165/HY/HB/QI/213683241/50kg-ultratech-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390166/NZ/LZ/PU/213683241/50kg-ultratech-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 43" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Brand", value: "UltraTech" },
      { label: "Usage/Application", value: "Constructions" }
    ],
    description:
      "UltraTech Super is a PPC grade cement. It is a finely blended cement manufactured using latest technology. It produces high strength concrete which is durable and highly resistant to wet cracking and thermal cracking."
  },
  {
    name: "50Kg Ramco Supercrete Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438855127/ZO/IE/BE/213683241/50kg-ramco-supercrete-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438855127/ZO/IE/BE/213683241/50kg-ramco-supercrete-cement-1000x1000.jpg",
    price: "Approx. Rs 330 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438855127/ZO/IE/BE/213683241/50kg-ramco-supercrete-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/0H7fjIBJwtk/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390278/KU/WA/VW/213683241/50kg-ramco-supercrete-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390289/SX/XI/RT/213683241/50kg-ramco-supercrete-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 43" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Certified By", value: "ISI" },
      { label: "Brand", value: "Ramco" },
      { label: "Model", value: "Supercrete" },
      { label: "Color", value: "Grey" }
    ],
    description:
      "High compressive strength in concrete: using Supercrete enables you to make a concrete with high compressive strength. Even though it's a blended cement it has the compressive strength of an OPC 53 grade cement."
  },
  {
    name: "50Kg Dalmia DSP Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-1000x1000.jpg",
    price: "Approx. Rs 330 / Piece",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438856676/YP/RU/OO/213683241/50kg-dalmia-dsp-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/CcRdCQQ64as/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390503/GI/YY/SH/213683241/50kg-dalmia-dsp-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390508/JL/BM/BW/213683241/50kg-dalmia-dsp-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Piece" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Usage", value: "Construction" },
      { label: "Color", value: "Grey" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Brand", value: "Dalmia DSP" }
    ],
    description:
      "Dalmia DSP Cement utilizes Ground Granulated Blast Furnace Slag (GGBS), a by-product of steel manufacturing process, which otherwise would have to be disposed into the environment. The process is recognized by Leadership in Energy and Environmental Design (LEED) for improving the sustainability of a project."
  },
  {
    name: "JSW Concreel HD Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862998/VD/CE/KZ/213683241/jsw-concreel-hd-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862998/VD/CE/KZ/213683241/jsw-concreel-hd-cement-1000x1000.jpg",
    price: "Approx. Rs 320 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438862998/VD/CE/KZ/213683241/jsw-concreel-hd-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/3F_3CT7UElo/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527392087/IO/UV/DJ/213683241/jsw-concreel-hd-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527392088/VU/AK/KV/213683241/jsw-concreel-hd-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Cement Type", value: "PSC (Portland Slag Cement)" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Packaging Type", value: "PP Sack Bag" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Usage", value: "Construction" },
      { label: "Model Name", value: "Concreel HD" },
      { label: "Brand", value: "JSW Cement" },
      { label: "Shelf Life", value: "12 Months" },
      { label: "Colour", value: "Grey" }
    ],
    description:
      "JSW Concreel HD is our next-generation green cement, developed to meet all concrete-based construction requirements. The product comes with improvised chemical resistance and superior cohesion."
  },
  {
    name: "India Conkrete Super King Cement",
    image: "https://5.imimg.com/data5/WHATSAPP/Default/2024/7/436279828/VP/JC/VD/213683241/new-product-250x250.jpeg",
    hiRes: "https://5.imimg.com/data5/WHATSAPP/Default/2024/7/436279828/VP/JC/VD/213683241/new-product-1000x1000.jpeg",
    price: "Approx. Rs 410 / Bag",
    gallery: [
      "https://5.imimg.com/data5/WHATSAPP/Default/2024/7/436279828/VP/JC/VD/213683241/new-product-1000x1000.jpeg",
      "https://img.youtube.com/vi/QgfQocOXfFs/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391036/ZS/BE/KY/213683241/india-conkrete-super-king-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391041/JN/GN/LB/213683241/india-conkrete-super-king-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Brand", value: "India Cement" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Grade", value: "43 Grade" },
      { label: "Usage/Application", value: "Construction" },
      { label: "Color", value: "Grey" }
    ],
    description:
      "Conkrete Super King (CSK) has been designed to deal with issues faced by the people such as cracks in structures, seepage and leakage, and ensure long-term stability and strength."
  },
  {
    name: "Zuari PPC Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-1000x1000.jpg",
    price: "Approx. Rs 295 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438862428/ZV/YY/UI/213683241/zuari-ppc-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/8ssEf0xxOzk/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527392009/AS/HK/VK/213683241/zuari-ppc-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527392010/UN/YY/TZ/213683241/zuari-ppc-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Certified By", value: "ISI" },
      { label: "Color", value: "Grey" },
      { label: "Cement Type", value: "PPC (Pozzolana Portland Cement)" }
    ],
    description:
      "Zuari Cement products are preferred by professionals throughout all disciplines of the construction industry. Whether sparked by an architect, an owner or a building engineer, any project's vision is only as realistic as access to materials capable of achieving precise details in their purest form. At Zuari, we are proud to provide materials that are uncompromising in creative breadth, technical quality and practical applicability."
  },
  {
    name: "Ramco Super Steel Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438861539/IH/FX/QL/213683241/ramco-super-steel-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438861539/IH/FX/QL/213683241/ramco-super-steel-cement-1000x1000.jpg",
    price: "Approx. Rs 450 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438861539/IH/FX/QL/213683241/ramco-super-steel-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/ukDWyIHbR04/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391738/NN/TL/CQ/213683241/ramco-super-steel-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Shelf Life", value: "1 Year" },
      { label: "Certified By", value: "ISI" },
      { label: "Colour", value: "Grey" },
      { label: "Usage", value: "Construction" },
      { label: "Type", value: "PSC (Portland Slag Cement)" },
      { label: "Model", value: "Super Steel" }
    ],
    description:
      "Ramco Supersteel is a specially formulated blended cement manufactured as per IS 1489. This cement is the culmination of R&D efforts, our experience of supplying cement to critical projects and feedback from civil engineers."
  },
  {
    name: "50Kg Chettinad Super Grade Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-1000x1000.jpg",
    price: "Approx. Rs 330 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438856020/UY/HJ/NS/213683241/50kg-chettinad-super-grade-cement-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390909/PP/FJ/YD/213683241/50kg-chettinad-super-grade-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527390911/VQ/KV/RY/213683241/50kg-chettinad-super-grade-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Certified By", value: "ISI" },
      { label: "Brand", value: "Chettinad" },
      { label: "Usage", value: "Construction" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Model Name", value: "Super Grade" }
    ],
    description:
      "OPC 53 grade Chettinad Cement is specially blended with good quality control monitoring systems, engineered for use in all structural, building and particularly in marine and hydraulic construction. Chettinad Cement is the result of careful effort in the research and development of our cement engineers and scientists."
  },
  {
    name: "50Kg Valimai PCC Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438857597/SS/KO/WR/213683241/50kg-valimai-pcc-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438857597/SS/KO/WR/213683241/50kg-valimai-pcc-cement-1000x1000.jpg",
    price: "Approx. Rs 310 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438857597/SS/KO/WR/213683241/50kg-valimai-pcc-cement-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527389805/QJ/LU/GW/213683241/50kg-valimai-pcc-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527389905/ZV/SS/OM/213683241/50kg-valimai-pcc-cement-1000x1000.jpg"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Usage", value: "Constructions" },
      { label: "Brand", value: "Valimai" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Color", value: "Grey" },
      { label: "Shelf Life", value: "3 Months" }
    ],
    description:
      "Valimai PPC is the ultra fineness providing cement with high early strength. It provides improved workability, durability and enhanced compressive strength. It has low heat of hydration with reduced shrinkage and swelling and increased resistance to chloride, sulphate and alkali attack."
  },
  {
    name: "50Kg ACC Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-1000x1000.jpg",
    price: "Approx. Rs 300 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438859842/JD/CI/IQ/213683241/50kg-acc-cement-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391577/FV/FL/AS/213683241/50kg-acc-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391578/RC/ZG/VS/213683241/50kg-acc-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Certified By", value: "ISI" },
      { label: "Type", value: "PPC (Pozzolana Portland Cement)" },
      { label: "Usage", value: "Construction" },
      { label: "Brand", value: "ACC" }
    ],
    description:
      "It is also used in the finishing of all types of buildings, bridges, culverts, roads, water retaining structures, etc. ACC cement surpasses BIS specifications (IS 8112-1989 for 43 grade OPC) on compressive strength levels and is marketed in specially designed 50 kg bags."
  },
  {
    name: "50Kg Sankar Super Power Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438858832/OV/CU/MT/213683241/50kg-sankar-super-power-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438858832/OV/CU/MT/213683241/50kg-sankar-super-power-cement-1000x1000.jpg",
    price: "Approx. Rs 430 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438858832/OV/CU/MT/213683241/50kg-sankar-super-power-cement-1000x1000.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527389629/GS/IU/BU/213683241/50kg-sankar-super-power-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527389634/TS/UU/KK/213683241/50kg-sankar-super-power-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Usage", value: "Construction" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Model Name", value: "Super Power" },
      { label: "Certified By", value: "ISI" },
      { label: "Color", value: "Grey" },
      { label: "Brand", value: "Sankar" },
      { label: "Type", value: "PSC (Portland Slag Cement)" }
    ],
    description:
      "Sankar Super Power Cement, ₹ 290 / Bag, Brand: Sankar, Type: PPC (Pozzolana Portland Cement), Packaging Size: 50 kg, Packaging Type: PP sack bag."
  },
  {
    name: "50Kg Dalmia Future Today Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438852972/TD/NW/JB/213683241/50kg-dalmia-future-today-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438852972/TD/NW/JB/213683241/50kg-dalmia-future-today-cement-1000x1000.jpg",
    price: "Approx. Rs 330 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438852972/TD/NW/JB/213683241/50kg-dalmia-future-today-cement-1000x1000.jpg",
      "https://img.youtube.com/vi/c7_Hd38v6w4/sddefault.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391905/TP/GV/GT/213683241/50kg-dalmia-future-today-cement-1000x1000.png",
      "https://5.imimg.com/data5/SELLER/Default/2025/7/527391906/MQ/JG/BG/213683241/50kg-dalmia-future-today-cement-1000x1000.png"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Usage", value: "Construction" },
      { label: "Shelf Life", value: "3 Months" },
      { label: "Model Name", value: "Future Today" },
      { label: "Color", value: "Grey" },
      { label: "Brand", value: "Dalmia" }
    ],
    description:
      "High strength construction produced using superior ingredients to provide high strength construction, from the moment you build your home to the long term. Dalmia Future Today Cement offers best-in-class durability, resistance to chemical corrosion, denser and impervious concrete, and helps deliver greener construction."
  },
  {
    name: "Penna OPC 53 Grade Cement",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-250x250.jpg",
    hiRes: "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-1000x1000.jpg",
    price: "Approx. Rs 360 / Bag",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2024/7/438860540/BT/PY/SY/213683241/penna-opc-53-grade-cement-250x250.jpg"
    ],
    details: [
      { label: "Minimum Order Quantity", value: "10 Bag" },
      { label: "Packaging Size", value: "50 Kg" },
      { label: "Cement Grade", value: "Grade 53" },
      { label: "Packaging Type", value: "Bag" },
      { label: "Certified By", value: "ISI" },
      { label: "Form", value: "Powder" },
      { label: "Cement Type", value: "OPC (Ordinary Portland Cement)" },
      { label: "Usage", value: "Constructions" }
    ],
    description:
      "Created from superior quality clinker and gypsum, Penna OPC 53 Grade provides high strength to structures because of its optimum particle size distribution, superior crystallized structure and balanced phase composition."
  }
];
