// Catálogo Oficial Sincronizado desde Super_Tabla_Maestra (AP_HIS) con Campos Obligatorios
window.CATALOGO_PAQUETES_OFICIAL = [
  {
    "codigo": "PAQ-001",
    "prof": "Medicina",
    "universal": false,
    "prog": "DAÑOS NO TRANSMISIBLES",
    "sub": "Hipertensión Arterial (4 Líneas)",
    "sec": "Paquete #1",
    "nombre": "Hipertensión Arterial (4 Líneas)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PAB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Hipertensión esencial (primaria)",
        "dx": "D",
        "lab1": "PC",
        "lab2": "",
        "lab3": "",
        "cod": "I10",
        "inst": "Ingresar meses de tratamiento (ej. 1, 2, 3)"
      },
      {
        "orden": 2,
        "desc": "Tamizaje de la presión arterial",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.22",
        "inst": "Colocar en LAB la presión arterial (PAS/PAD)"
      },
      {
        "orden": 3,
        "desc": "Dosaje de creatinina sérica (Evaluación renal)",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "82565",
        "inst": "Colocar en LAB el valor de creatinina (mg/dL)"
      },
      {
        "orden": 4,
        "desc": "Consejería en estilos de vida saludables",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-002",
    "prof": "Medicina",
    "universal": false,
    "prog": "DAÑOS NO TRANSMISIBLES",
    "sub": "Diabetes Mellitus 2 (5 Líneas)",
    "sec": "Paquete #2",
    "nombre": "Diabetes Mellitus 2 (5 Líneas)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PAB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Diabetes mellitus no insulinodependiente",
        "dx": "R",
        "lab1": "PC",
        "lab2": "",
        "lab3": "",
        "cod": "E11.9",
        "inst": "Ingresar meses de tratamiento (ej. 1, 2, 3)"
      },
      {
        "orden": 2,
        "desc": "Dosaje / Tamizaje de glucosa en sangre",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "82948",
        "inst": "Colocar en LAB el valor de glucosa (mg/dL)"
      },
      {
        "orden": 3,
        "desc": "Tamizaje de la presión arterial",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.22",
        "inst": "Colocar en LAB la presión arterial (PAS/PAD)"
      },
      {
        "orden": 4,
        "desc": "Evaluación del pie diabético / sensibilidad",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "99214.07",
        "inst": "Colocar N (Normal) o A (Alterado) en LAB"
      },
      {
        "orden": 5,
        "desc": "Consejería preventiva en factores de riesgo",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99402.08",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-003",
    "prof": "Medicina",
    "universal": false,
    "prog": "DAÑOS NO TRANSMISIBLES",
    "sub": "Síndrome Metabólico (3 Líneas)",
    "sec": "Paquete #3",
    "nombre": "Síndrome Metabólico (3 Líneas)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PAB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Síndrome metabólico",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "E88.8",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Tamizaje de la presión arterial",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.22",
        "inst": "Colocar en LAB la presión arterial (PAS/PAD)"
      },
      {
        "orden": 3,
        "desc": "Dosaje de triglicéridos / perfil lipídico",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "84478",
        "inst": "Colocar en LAB el valor obtenido"
      }
    ]
  },
  {
    "codigo": "PAQ-004",
    "prof": "Medicina",
    "universal": false,
    "prog": "PREVENCIÓN DE CÁNCER",
    "sub": "Tamizaje Cáncer de Próstata (65 años)",
    "sec": "Paquete #4",
    "nombre": "Tamizaje Cáncer de Próstata (65 años)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Indicación de Dosaje de Antígeno Prostático",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "84152",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Consejería Preventiva en Factores de Riesgo para el Cáncer",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99402.08",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-005",
    "prof": "Medicina",
    "universal": false,
    "prog": "PREVENCIÓN DE CÁNCER",
    "sub": "Tamizaje Cáncer de Colon y Recto",
    "sec": "Paquete #5",
    "nombre": "Tamizaje Cáncer de Colon y Recto",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Test de Sangre Oculta en Heces",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "82270",
        "inst": "Colocar resultado (si aplica)"
      },
      {
        "orden": 2,
        "desc": "Consejería Preventiva en Factores de Riesgo para el Cáncer",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99402.08",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-006",
    "prof": "Medicina",
    "universal": false,
    "prog": "PREVENCIÓN DE CÁNCER",
    "sub": "Tamizaje de Cáncer de Piel",
    "sec": "Paquete #6",
    "nombre": "Tamizaje de Cáncer de Piel",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Examen Clínico de Piel",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z128",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Consejería Preventiva en Factores de Riesgo para el Cáncer",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99402.08",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-007",
    "prof": "Medicina",
    "universal": false,
    "prog": "PREVENCIÓN DE CÁNCER",
    "sub": "Tamizaje Cáncer de Cuello Uterino (PAP)",
    "sec": "Paquete #7",
    "nombre": "Tamizaje Cáncer de Cuello Uterino (PAP)",
    "obligatorios": [
      "FUR"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Citopatología Cervicovaginal (Toma de Papanicolaou)",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "88141",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Consejería Preventiva en Factores de Riesgo para el Cáncer",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99402.08",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-008",
    "prof": "Medicina",
    "universal": false,
    "prog": "ZOONOSIS",
    "sub": "Rabia",
    "sec": "Paquete #8",
    "nombre": "Rabia",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Colocar el Diagnóstico: Herida en... (codo, brazo, mano, pierna, etc)",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "",
        "inst": "Códigos HIS: En Codo (S510), Miemb.Sup (S417), Pierna (S817)."
      },
      {
        "orden": 2,
        "desc": "Mordedura de perro (o animal transmisor)",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "W540",
        "inst": "Lab1: LEV o SEV (Severa) - Lab2: C (Conocido), DS (Desconocido),"
      },
      {
        "orden": 3,
        "desc": "Vacunación Antirrábica Humana IM (Prescripción/Inicio)",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "90675",
        "inst": "Lab1: 1 (Vacunacion Antirrabica) o 2 (Adm. de Inmunoglobulina Antirrábica)"
      },
      {
        "orden": 4,
        "desc": "Consejería Integral",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401",
        "inst": "Indicar el número de consejería"
      }
    ]
  },
  {
    "codigo": "PAQ-009",
    "prof": "Medicina",
    "universal": false,
    "prog": "METAXÉNICAS",
    "sub": "Dengue",
    "sec": "Paquete #9",
    "nombre": "Dengue-Caso Sospechoso",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Dengue sin signos de alarma (o con signos de alarma)",
        "dx": "P",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "A90X",
        "inst": "LAB 1: Registrar 5 (Actividad de vigilancia de dengue)"
      }
    ]
  },
  {
    "codigo": "PAQ-010",
    "prof": "Medicina",
    "universal": false,
    "prog": "METAXÉNICAS",
    "sub": "Dengue",
    "sec": "Paquete #10",
    "nombre": "Dengue-Caso Confirmado",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Dengue sin signos de alarma (o con signos de alarma)",
        "dx": "D",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "A90X",
        "inst": "LAB 1: Registrar 5 (Actividad de vigilancia de dengue)"
      }
    ]
  },
  {
    "codigo": "PAQ-011",
    "prof": "Medicina",
    "universal": false,
    "prog": "GESTANTE",
    "sub": "Anemia-Gestante",
    "sec": "Paquete #11",
    "nombre": "Anemia-Gestante",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB",
      "FUR"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Supervisión de embarazo con riesgo",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "Z359",
        "inst": "Ingresar número de atención"
      },
      {
        "orden": 2,
        "desc": "Medición de hemoglobina",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "85018",
        "inst": "Colocar en LAB el valor de la hemoglobina"
      },
      {
        "orden": 3,
        "desc": "Anemia que complica el embarazo, parto y/o puerperio",
        "dx": "D",
        "lab1": "LEV",
        "lab2": "",
        "lab3": "",
        "cod": "O990",
        "inst": "Colocar severidad (LEV, MOD, SEV)"
      },
      {
        "orden": 4,
        "desc": "Suplementación de sulfato ferroso más ácido fólico",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.26",
        "inst": "Colocar número de entrega"
      },
      {
        "orden": 5,
        "desc": "Consejería en alimentación saludable",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": "Colocar número de consejería"
      }
    ]
  },
  {
    "codigo": "PAQ-012",
    "prof": "Medicina",
    "universal": false,
    "prog": "NIÑO",
    "sub": "Tratamiento de Anemia",
    "sec": "Paquete #12",
    "nombre": "Inicio Tto. Anemia - Niño 6 meses",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Anemia por deficiencia de hierro sin especificación",
        "dx": "D",
        "lab1": "MOD",
        "lab2": "",
        "lab3": "",
        "cod": "D509",
        "inst": "Colocar grado de severidad (LEV/MOD/SEV)"
      },
      {
        "orden": 2,
        "desc": "Medición de hemoglobina",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "85018",
        "inst": "Colocar valor de hemoglobina"
      },
      {
        "orden": 3,
        "desc": "Suplementación con hierro",
        "dx": "D",
        "lab1": "SF1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": "Colocar tipo y número de entrega (SF1 o P01)"
      }
    ]
  },
  {
    "codigo": "PAQ-013",
    "prof": "Medicina",
    "universal": false,
    "prog": "NIÑO",
    "sub": "Tratamiento de Anemia",
    "sec": "Paquete #13",
    "nombre": "Continua Tto. Anemia -Niño 6m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Anemia por deficiencia de hierro sin especificación",
        "dx": "R",
        "lab1": "MOD",
        "lab2": "",
        "lab3": "",
        "cod": "D509",
        "inst": "Colocar grado de severidad (LEV/MOD/SEV)"
      },
      {
        "orden": 2,
        "desc": "Suplementación con hierro",
        "dx": "D",
        "lab1": "SF2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": "Colocar tipo y número de entrega (SF2-SF6 o P02-P06)"
      }
    ]
  },
  {
    "codigo": "PAQ-014",
    "prof": "Medicina",
    "universal": false,
    "prog": "NIÑO",
    "sub": "Tratamiento de Anemia",
    "sec": "Paquete #14",
    "nombre": "Termina Tto. Anemia - Niño 6m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Anemia por deficiencia de hierro sin especificación",
        "dx": "R",
        "lab1": "PR",
        "lab2": "",
        "lab3": "",
        "cod": "D509",
        "inst": "Paciente Recuperado"
      },
      {
        "orden": 2,
        "desc": "Suplementación con hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": "Término de Administración"
      },
      {
        "orden": 3,
        "desc": "Medición de hemoglobina",
        "dx": "D",
        "lab1": "4",
        "lab2": "",
        "lab3": "",
        "cod": "85018",
        "inst": "Colocar valor de hemoglobina (medición final)"
      }
    ]
  },
  {
    "codigo": "PAQ-015",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "IRA / EDA",
    "sec": "Paquete #15",
    "nombre": "IRA o EDA-Consejeria Lavado de Manos",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Consejeria en Lavado de manos",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.24",
        "inst": "No olvidar: Nombre,DNI, Edad."
      }
    ]
  },
  {
    "codigo": "PAQ-016",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "IRA / EDA",
    "sec": "Paquete #16",
    "nombre": "IRA o EDA: Consejería",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Consejería en IRA o EDA",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.12",
        "inst": "No olvidar: Nombre,DNI, Edad."
      }
    ]
  },
  {
    "codigo": "PAQ-017",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Dengue",
    "sec": "Paquete #17",
    "nombre": "Dengue 1ra. visita (son 2 visitas)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 2,
        "desc": "Sesión Demostrativa",
        "dx": "D",
        "lab1": "Lab1:1 - Lab2:5",
        "lab2": "",
        "lab3": "",
        "cod": "C0010",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 3,
        "desc": "Consejeria Practicas Saludables",
        "dx": "D",
        "lab1": "VR",
        "lab2": "",
        "lab3": "",
        "cod": "99404.01",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 4,
        "desc": "Visita Familiar Integral",
        "dx": "D",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "C0011",
        "inst": "No olvidar:"
      }
    ]
  },
  {
    "codigo": "PAQ-018",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Dengue",
    "sec": "Paquete #18",
    "nombre": "Dengue 2da. visita (a los 7 dias)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 2,
        "desc": "Sesión Demostrativa",
        "dx": "D",
        "lab1": "Lab1:1 - Lab2:5",
        "lab2": "",
        "lab3": "",
        "cod": "C0010",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Consejeria Practicas Saludables",
        "dx": "D",
        "lab1": "HA",
        "lab2": "",
        "lab3": "",
        "cod": "99404.01",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Visita Familiar Integral",
        "dx": "D",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "C0011",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-019",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Familia Saludable",
    "sec": "Paquete #19",
    "nombre": "Fam Saludable 1ra Sesion. (Son 3 sesiones)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "Lab1: ALI - Lab2: 584",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "Temas: Alimentación Saludable (ALI), Actvidad Fisica (AFI), Salud Bucal(SBU), Salud Ocular (SO), Sueño Adecuado, Gestión del Estress | No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 2,
        "desc": "Sesión Demostrativa",
        "dx": "D",
        "lab1": "18",
        "lab2": "",
        "lab3": "",
        "cod": "C0010",
        "inst": "No olvidar: Nombre,DNI, Edad."
      }
    ]
  },
  {
    "codigo": "PAQ-020",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Familia Saludable",
    "sec": "Paquete #20",
    "nombre": "Fam Saludable. 2da sesion al mes (2/3)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "AFI",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 2,
        "desc": "Sesión Demostrativa",
        "dx": "D",
        "lab1": "18",
        "lab2": "",
        "lab3": "",
        "cod": "C0010",
        "inst": "No olvidar: Nombre,DNI, Edad."
      }
    ]
  },
  {
    "codigo": "PAQ-021",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Familia Saludable",
    "sec": "Paquete #21",
    "nombre": "Fam Saludable. 3ra sesion al mes (3/3)",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "Lab1:SO-Lab2:1-Lab3:2",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "No olvidar: Nombre,DNI, Edad."
      },
      {
        "orden": 2,
        "desc": "Sesión Demostrativa",
        "dx": "D",
        "lab1": "18",
        "lab2": "",
        "lab3": "",
        "cod": "C0010",
        "inst": "No olvidar: Nombre,DNI, Edad."
      }
    ]
  },
  {
    "codigo": "PAQ-022",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Fam Saludable - Cancer (TA: Tabaco, AD: Alcohol, HA:Piel, SSI (Salud Sexual).",
    "sec": "Paquete #22",
    "nombre": "Fam Saludable - Cancer (TA: Tabaco, AD: Alcohol, HA:Piel, SSI (Salud Sexual).",
    "obligatorios": [],
    "lineas": [
      {
        "orden": 1,
        "desc": "Sesion Educativa",
        "dx": "D",
        "lab1": "Lab1: TA - Lab2: AD",
        "lab2": "",
        "lab3": "",
        "cod": "C0009",
        "inst": "Se da: Jefe de Familia, Funcionarios, Docentes"
      },
      {
        "orden": 2,
        "desc": "Orientacion Familiar",
        "dx": "D",
        "lab1": "24",
        "lab2": "",
        "lab3": "",
        "cod": "C2062",
        "inst": "Se da: Jefe de Familia, Funcionarios, Docentes"
      }
    ]
  },
  {
    "codigo": "PAQ-023",
    "prof": "Medicina",
    "universal": false,
    "prog": "PROMSA",
    "sub": "Niños con Anemia Consejeria y Visita Dom",
    "sec": "Paquete #23",
    "nombre": "Niños con Anemia Consejeria y Visita Dom",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Anemia por Deficiencia de Hierro",
        "dx": "R",
        "lab1": "Lev, Mod o Severa",
        "lab2": "",
        "lab3": "",
        "cod": "D509",
        "inst": "Consejeria: Consumo del Hierro. Alimentacion Complementaria. LActancia Materna. Lavado de manos. Otras segun la edad."
      },
      {
        "orden": 2,
        "desc": "Consejería Integral",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Visita Familiar Integral",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "C0011",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Suplementación de Hierro",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-024",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Prematuro / Bajo Peso",
    "sec": "Paquete #24",
    "nombre": "Prematuro o Bajo Peso - 1er control de 4 controles (1er.-2do.-3er.-4to mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "NO OLVIDAR: Peso, Talla, Hb."
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "CLME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Dosaje Hemoglobina",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Prematuro",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "P07",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Bajo Peso",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "P0712",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      },
      {
        "orden": 10,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96050.01",
        "inst": ""
      },
      {
        "orden": 11,
        "desc": "Adm. Sulfato Ferrorso",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 12,
        "desc": "C. Salud Ocular",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-025",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Prematuro / Bajo Peso",
    "sec": "Paquete #25",
    "nombre": "Prematuro o Bajo Peso 2do. control de 4 controles (1er.-2do.-3er.-4to mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "CLME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "94199.17",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-026",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Prematuro / Bajo Peso",
    "sec": "Paquete #26",
    "nombre": "Prematuro o Bajo Peso 3er. control de 4 controles (1er.-2do.-3er.-4to mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "4",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "CLME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85918.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-027",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Recién Nacido (RN)",
    "sec": "Paquete #27",
    "nombre": "Recien Nacido- Atc Inmediata",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Atc Inmediata del RN",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99436",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Contacto Piel a Piel",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99436.02",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Examen Fisico RN",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99431",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consejeria LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Consejeria Cordon U.",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.04",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Atencion RN Alojamiento",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99460",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-028",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Recién Nacido (RN)",
    "sec": "Paquete #28",
    "nombre": "Recien Nacido 3-6 dia",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99381.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Consejeria Hogar",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.1",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consejeria LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Consejeria Cordon",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.04",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-029",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Recién Nacido (RN)",
    "sec": "Paquete #29",
    "nombre": "Recien Nacido 7-14 dias",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99381.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Consejeria Hogar",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.1",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consejeria LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Consejeria Cordon",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.04",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-030",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Recién Nacido (RN)",
    "sec": "Paquete #30",
    "nombre": "Recien Nacido 15-21 dias",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99381.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Consejeria Hogar",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.1",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consejeria LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-031",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Menor de 6 Meses",
    "sec": "Paquete #31",
    "nombre": "Niño menor de 6 meses 1er Control (5 controles)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consej.LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96050.01",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "C.Salud Ocular",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-032",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Menor de 6 Meses",
    "sec": "Paquete #32",
    "nombre": "Niño menor de 6 meses 2do Control (5 controles)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consej.LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-033",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Menor de 6 Meses",
    "sec": "Paquete #33",
    "nombre": "Niño menor de 6 meses 3er Control (5 controles)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consej.LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-034",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Menor de 6 Meses",
    "sec": "Paquete #34",
    "nombre": "Niño menor de 6 meses 4to Control (5 controles)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "4",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Consej.LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99149.17",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-035",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Menor de 6 Meses",
    "sec": "Paquete #35",
    "nombre": "Niño menor de 6 meses 5to Control (5 controles)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99149.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Consej. LME",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.03",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-036",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 6m a 11m. 5 controles",
    "sec": "Paquete #36",
    "nombre": "Niño de 6m a 11m - 1/5 controles (Cada mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "No olvidar colocar resultado Hemoglobina"
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Adm.de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Control de salud ocular",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-037",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 6m a 11m. 5 controles",
    "sec": "Paquete #37",
    "nombre": "Niño de 6m a 11m - 2/5 controles (Cada mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "6",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-038",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 6m a 11m. 5 controles",
    "sec": "Paquete #38",
    "nombre": "Niño de 6m a 11m - 3/5 controles (Cada mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-039",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 6m a 11m. 5 controles",
    "sec": "Paquete #39",
    "nombre": "Niño de 6m a 11m - 4/5 controles (Cada mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "7",
        "lab2": "",
        "lab3": "",
        "cod": "99381",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-040",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 6m a 11m. 5 controles",
    "sec": "Paquete #40",
    "nombre": "Niño de 6m a 11m - 5/5 controles (Cada mes)",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-041",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #41",
    "nombre": "Niño de 1 año - 1/6 controles. 1a",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "No olvidar colocar resultado Hb"
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Estudio de Parasitos",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87177.01",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Test de Graham",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87178",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 10,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96150.01",
        "inst": ""
      },
      {
        "orden": 11,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      },
      {
        "orden": 12,
        "desc": "C. Salud Ocular",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-042",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #42",
    "nombre": "Niño de 1 año - 2/6 controles. 1a3m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "No olvidar colocar resultado Hb"
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-043",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #43",
    "nombre": "Niño de 1 año - 3/6 controles. 1a5m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-044",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #44",
    "nombre": "Niño de 1 año - 4/6 controles. 1a6m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "No olvidar colocar resultado Hb"
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-045",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #45",
    "nombre": "Niño de 1 año - 5/6 controles. 1a7m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-046",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 1 año (6 controles)",
    "sec": "Paquete #46",
    "nombre": "Niño de 1 año - 6/6 controles. 1a9m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": "No olvidar colocar resultado Hb"
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "4",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-047",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #47",
    "nombre": "Niño de 2 años",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "D/C Parasitosis",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87177.01",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Test de Graham",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87178",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Examen de Ojos",
        "dx": "D",
        "lab1": "N",
        "lab2": "",
        "lab3": "",
        "cod": "Z010",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 10,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": "Sulf.Fe. jbe. 10cc c/24h por 1 mes"
      },
      {
        "orden": 11,
        "desc": "Adm. de Vit. A",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.27",
        "inst": ""
      },
      {
        "orden": 12,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96150.01",
        "inst": ""
      },
      {
        "orden": 13,
        "desc": "C. de Salud Ocular",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-048",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #48",
    "nombre": "Niño de 2 años 1m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Profilaxis Antiparasitaria",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.28",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-049",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #49",
    "nombre": "Niño de 2 años 2m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-050",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #50",
    "nombre": "Niño de 2 años 3m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "4",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-051",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #51",
    "nombre": "Niño de 2 años 4m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "5",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-052",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #52",
    "nombre": "Niño de 2 años 5m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. Hierro",
        "dx": "D",
        "lab1": "6",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-053",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #53",
    "nombre": "Niño de 2 años 6m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje de Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "Adm de Vit. A",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.2",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-054",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 2 años",
    "sec": "Paquete #54",
    "nombre": "Niño de 2 años 7m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "PC",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": "No olvidar colocar resultado HB"
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99804",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-055",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 3 años",
    "sec": "Paquete #55",
    "nombre": "Niño de 3 años",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "D/C Parasitosis",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87177.01",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Test de Graham",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87178",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 10,
        "desc": "Adm. de Vit. A",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.27",
        "inst": ""
      },
      {
        "orden": 11,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96150.01",
        "inst": ""
      },
      {
        "orden": 12,
        "desc": "Agudeza Visual",
        "dx": "D",
        "lab1": "30 - 40",
        "lab2": "",
        "lab3": "",
        "cod": "99173",
        "inst": ""
      },
      {
        "orden": 13,
        "desc": "C. de Salud Ocular",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-056",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 3 años",
    "sec": "Paquete #56",
    "nombre": "Niño de 3 años 1m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm.de Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Profilaxis Antiparasitaria",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.28",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-057",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 3 años",
    "sec": "Paquete #57",
    "nombre": "Niño de 3 años 2m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm.de Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-058",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 3 años",
    "sec": "Paquete #58",
    "nombre": "Niño de 3 años 3m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-059",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 3 años",
    "sec": "Paquete #59",
    "nombre": "Niño de 3 años 6m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Adm. Vit A",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.27",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-060",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 4 años",
    "sec": "Paquete #60",
    "nombre": "Niño de 4 años",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "D/C Parasitosis",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "8717701",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Test de Graham",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87178",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "PAI",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 10,
        "desc": "Adm. Vit A",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "96150.01",
        "inst": ""
      },
      {
        "orden": 11,
        "desc": "Tamizaje VIF",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96150.01",
        "inst": ""
      },
      {
        "orden": 12,
        "desc": "Agudeza Visual",
        "dx": "D",
        "lab1": "20 - 25",
        "lab2": "",
        "lab3": "",
        "cod": "99173",
        "inst": ""
      },
      {
        "orden": 13,
        "desc": "Control Salude Ocular",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-061",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 4 años",
    "sec": "Paquete #61",
    "nombre": "Niño de 4 años 1m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Profilaxis Antiparasitaria",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99199.22",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-062",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 4 años",
    "sec": "Paquete #62",
    "nombre": "Niño de 4 años 2m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-063",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 4 años",
    "sec": "Paquete #63",
    "nombre": "Niño de 4 años 3m",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-064",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 4 años",
    "sec": "Paquete #64",
    "nombre": "Niño de 4 años 6m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Adm. Vit A",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.27",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-065",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 5 años",
    "sec": "Paquete #65",
    "nombre": "Niño de 5 años",
    "obligatorios": [
      "PESO",
      "TALLA",
      "HB",
      "FHB"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "CRED",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "Z00.1",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "AIS CRED",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99382",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Tamizaje Desarrollo",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "96110",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 5,
        "desc": "D/C Parasitosis",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "8717701",
        "inst": ""
      },
      {
        "orden": 6,
        "desc": "Test de Graham",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "87178",
        "inst": ""
      },
      {
        "orden": 7,
        "desc": "Dosaje de Hb",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "85018.01",
        "inst": ""
      },
      {
        "orden": 8,
        "desc": "Agudeza Visual",
        "dx": "D",
        "lab1": "20 - 25",
        "lab2": "",
        "lab3": "",
        "cod": "99173",
        "inst": ""
      },
      {
        "orden": 9,
        "desc": "Control de Salud Ocular",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99401.16",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-066",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 5 años",
    "sec": "Paquete #66",
    "nombre": "Niño de 5 años 1m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "2",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Profilaxis Antiparasitaria",
        "dx": "D",
        "lab1": "1",
        "lab2": "",
        "lab3": "",
        "cod": "99199.22",
        "inst": ""
      }
    ]
  },
  {
    "codigo": "PAQ-067",
    "prof": "Enfermería",
    "universal": false,
    "prog": "CRED",
    "sub": "Niño de 5 años",
    "sec": "Paquete #67",
    "nombre": "Niño de 5 años 2m",
    "obligatorios": [
      "PESO",
      "TALLA"
    ],
    "lineas": [
      {
        "orden": 1,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "3",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 2,
        "desc": "Control Nutricional",
        "dx": "D",
        "lab1": "",
        "lab2": "",
        "lab3": "",
        "cod": "99403.01",
        "inst": ""
      },
      {
        "orden": 3,
        "desc": "Adm. de Hierro",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99199.17",
        "inst": ""
      },
      {
        "orden": 4,
        "desc": "PAI",
        "dx": "D",
        "lab1": "TA",
        "lab2": "",
        "lab3": "",
        "cod": "99801",
        "inst": ""
      }
    ]
  }
];
