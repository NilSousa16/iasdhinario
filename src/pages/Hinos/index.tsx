import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { Container, ContainerItem, ContainerInfo, LogoItem, TitleItem, DetailsItem } from './styles';

const HINOLIST = [
  {
    id: '1',
    title: 'Ó Deus de Amor',
    englishTitle: 'Before Jehova\'s Awful Throne',
    section: 'Section 1',
  },
  {
    id: '2',
    title: 'Ó Adorai o senhor',
    englishTitle: 'O Worship the Lord',
    section: 'Section 1',
  },
  {
    id: '3',
    title: 'O Deus Eterno Reina',
    englishTitle: 'The Lord in Zion Reigneth',
    section: 'Section 7',
  },
  {
    id: '4',
    title: 'Louvor ao Trino Deus',
    englishTitle: 'Praise Ye the Father',
    section: 'Section 7',
  },
  {
    id: '5',
    title: 'Supremo Criador',
    englishTitle: 'My Maker and My King',
    section: 'Section 7',
  },
  {
    id: '6',
    title: 'Por Belezas Naturais',
    englishTitle: 'For the Beauty of the Earth',
    section: 'Section 7',
  },
  {
    id: '7',
    title: 'Sejas Louvado',
    englishTitle: 'Praise to the Lord',
    section: 'Section 7',
  },
  {
    id: '8',
    title: 'A Ti Rendemos Glórias',
    englishTitle: 'All Glory, Laud, and Honor',
    section: 'Section 7',
  },
  {
    id: '9',
    title: 'Prece ao Trino Deus',
    englishTitle: 'Come, Thou Almighty King',
    section: 'Section 7',
  },
  {
    id: '15',
    title: 'Vós, Criatura do Senhor',
    englishTitle: 'All Creatures of Our God and King',
    section: 'Section 7',
  },
  {
    id: '16',
    title: 'A Deus Demos Glória',
    englishTitle: 'To God Be the Glory',
    section: 'Section 5',
  },
  {
    id: '17',
    title: 'Nós te Adoramos',
    englishTitle: 'Nous T\'adorons, Dieu Vivant',
    section: 'Section 2',
  },
  {
    id: '18',
    title: 'Santo! Santo! Santo!',
    englishTitle: 'Holy, Holy, Holy',
    section: 'Section 3',
  },
  {
    id: '19',
    title: 'Ao Coro dos Arcanjos',
    englishTitle: 'Pour Chanter les Louanges',
    section: 'Section 5',
  },
];

const Hinos: React.FC = () => {

  const renderItem = ({item}) => {
    return (
      <ContainerItem>
        <LogoItem >
          { item.id }
        </LogoItem>

        <ContainerInfo>
          <TitleItem>
            { item.title }
          </TitleItem>

          <DetailsItem>
            { item.englishTitle }
          </DetailsItem>
        </ContainerInfo>
      </ContainerItem>
    );
  }

  return (<>
    <Container>
      <FlatList
        data={HINOLIST}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  </>);
};

export default Hinos;
