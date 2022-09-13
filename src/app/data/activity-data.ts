import { Activity } from "../models/activity";


/**
 *
 * area 1: arte y creatividad
 * area 2: ciencias sociales
 * area 3: economica administrativa y financiera
 * area 4: ciencia y tecnologia
 * area 5: ciencias ecologias biologicas y de salud
 *
 *
 */


export const ACTIVITIES: Activity[] = [
  {
    id: 1,
    activity: 'Diseñar programas de computación y explorar nuevas aplicaciones tecnológicas para uso del internet',
    area: 4,
  },
  {
    id: 2,
    activity: 'Criar, cuidar y tratar animales domésticos y de campo',
    area: 5,
  },
  {
    id: 3,
    activity: 'Investigar sobre áreas verdes, medio ambiente y cambios climáticos',
    area: 5,
  },
  {
    id: 4,
    activity: 'Ilustrar, dibujar y animar digitalmente',
    area: 1,
  },
  {
    id: 5,
    activity: 'Seleccionar, capacitar y motivar al personal de una organización/empresa',
    area: 3,
  },
  {
    id: 6,
    activity: 'Realizar excavaciones para descubrir restos del pasado',
    area: 2,
  },
  {
    id: 7,
    activity: 'Resolver problemas de cálculo para construir un puente',
    area: 4,
  },
  {
    id: 8,
    activity: 'Diseñar cursos para enseñar a la gente sobre temas de salud e higiene',
    area: 5,
  },
];
