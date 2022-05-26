import React from 'react';
import Selector from "components/forms/selectors/Selector";
import {DashboardBody, DashboardColumn, DashboardSectionContainer, DashboardSectionTitle} from "./Dashboard.styles";

const DashboardComponent = ({
  academicTerms,
  setCurrentAcademicTerm,
  academicTerm,
}) => (
  <DashboardBody>
    <DashboardColumn>
      <DashboardSectionContainer>
        <DashboardSectionTitle>Set current academic term</DashboardSectionTitle>

        <Selector
          options={academicTerms}
          value={academicTerm}
          onChangeValue={setCurrentAcademicTerm}
          name={'term'}
          title={'academic term'} />
      </DashboardSectionContainer>
    </DashboardColumn>

    <DashboardColumn></DashboardColumn>
  </DashboardBody>
);

export default DashboardComponent;
