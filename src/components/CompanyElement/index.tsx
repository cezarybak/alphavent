import { useFavoriteContext } from '../../hooks';
import { CompanyElement as CompanyElementType } from 'src/types/SearchCompanyList';
import { CompanyElementItem, ElementButton, ElementContent } from './styled';

type Props = {
  element: CompanyElementType;
};

export const CompanyElement = ({ element }: Props) => {
  const { setFavoriteData, favoriteData } = useFavoriteContext();

  const isElementDisabled = Boolean(
    favoriteData.find((favoriteElement) => favoriteElement.symbol === element['1. symbol']),
  );

  const handleAddElement = () =>
    setFavoriteData((prev) => {
      return [...prev, { company: element['2. name'], symbol: element['1. symbol'] }];
    });

  return (
    <CompanyElementItem>
      <ElementContent>{`${element['1. symbol']} - ${element['2. name']}`}</ElementContent>
      <ElementButton disabled={isElementDisabled} onClick={handleAddElement}>
        +
      </ElementButton>
    </CompanyElementItem>
  );
};
