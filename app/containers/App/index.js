/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import CampaignCreate from 'containers/Campaign/CampaignCreate';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      {/* insert app header nav etc here */}
      <Header />
      <Switch>
        <Route path="/albus" component={CampaignCreate} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
