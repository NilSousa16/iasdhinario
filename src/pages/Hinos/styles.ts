import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  /* align-items: center;
  justify-content: center;
  padding: 0 30px 40px; */
  /* background-color: '#edf6f9'; */
  padding: 2px 0px 0px 0px;
  background: #edf6f9;
`;

export const ContainerItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 5px;
  padding: 5px 10px 5px 10px;
  margin-bottom: 5px;
`;

export const LogoItem = styled.Text`
  width: 45px;
  height: 45px;
  border-radius: 50px;
  line-height: 40px;

  background-color: #83c5be;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  line-height: 15px;
`;

export const TitleItem = styled.Text`
  font-size: 17px;
  color: #343a40;

  margin-top: 5px;
`;

export const DetailsItem = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #6c757d;

  /* text-align: right; */
  line-height: 30px;
`;


