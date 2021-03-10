import styled from 'styled-components/macro'
import CategoryCard from './CategoryCard'
import uuid from 'react-uuid'
import fussballIcon from '../material/icons/fussballIcon.svg'
import laufenIcon from '../material/icons/laufenIcon.svg'
import basketballIcon from '../material/icons/basketballIcon.svg'
import fitnessIcon from '../material/icons/fitnessIcon.svg'
import radfahrenIcon from '../material/icons/radfahrenIcon.svg'
import footballIcon from '../material/icons/footballIcon.svg'
import dartIcon from '../material/icons/dartIcon.svg'
import kampfsportIcon from '../material/icons/kampfsportIcon.svg'
import tennisIcon from '../material/icons/tennisIcon.svg'
import volleyballIcon from '../material/icons/volleyballIcon.svg'

export default function Categories() {
  const sports = [
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
  return (
    <CategoriesWrapper>
      {sports.map(sport => (
        <CategoryCard
          id={sport.id}
          categoryTitle={sport.categoryTitle}
          categoryIcon={sport.categoryIcon}
          categoryIconAltText={sport.categoryIconAltText}
        />
      ))}
    </CategoriesWrapper>
  )
}

const CategoriesWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`
