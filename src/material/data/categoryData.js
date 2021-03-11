import uuid from 'react-uuid'
import fussballIcon from '../icons/fussballIcon.svg'
import laufenIcon from '../icons/laufenIcon.svg'
import basketballIcon from '../icons/basketballIcon.svg'
import fitnessIcon from '../icons/fitnessIcon.svg'
import radfahrenIcon from '../icons/radfahrenIcon.svg'
import footballIcon from '../icons/footballIcon.svg'
import dartIcon from '../icons/dartIcon.svg'
import kampfsportIcon from '../icons/kampfsportIcon.svg'
import tennisIcon from '../icons/tennisIcon.svg'
import volleyballIcon from '../icons/volleyballIcon.svg'

export const sports = [
  {
    id: uuid(),
    categoryTitle: 'Fußball',
    categoryIcon: fussballIcon,
    categoryIconAltText: 'Fußball',
  },
  {
    id: uuid(),
    categoryTitle: 'Laufen',
    categoryIcon: laufenIcon,
    categoryIconAltText: 'Laufen',
  },
  {
    id: uuid(),
    categoryTitle: 'Fitness',
    categoryIcon: fitnessIcon,
    categoryIconAltText: 'Fitness',
  },
  {
    id: uuid(),
    categoryTitle: 'Radfahren',
    categoryIcon: radfahrenIcon,
    categoryIconAltText: 'Radfahren',
  },
  {
    id: uuid(),
    categoryTitle: 'Basketball',
    categoryIcon: basketballIcon,
    categoryIconAltText: 'Basketball',
  },
  {
    id: uuid(),
    categoryTitle: 'Football',
    categoryIcon: footballIcon,
    categoryIconAltText: 'Football',
  },
  {
    id: uuid(),
    categoryTitle: 'Dart',
    categoryIcon: dartIcon,
    categoryIconAltText: 'Dart',
  },
  {
    id: uuid(),
    categoryTitle: 'Volleyball',
    categoryIcon: volleyballIcon,
    categoryIconAltText: 'Volleyball',
  },
  {
    id: uuid(),
    categoryTitle: 'Tennis',
    categoryIcon: tennisIcon,
    categoryIconAltText: 'Tennis',
  },
  {
    id: uuid(),
    categoryTitle: 'Boxen',
    categoryIcon: kampfsportIcon,
    categoryIconAltText: 'Boxen',
  },
]
