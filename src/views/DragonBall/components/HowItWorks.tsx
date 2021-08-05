import { BigNumber } from '@ethersproject/bignumber';
import React from 'react';
import { Box, BoxBody, BoxHeader, BoxTitle } from 'src/components/Box';
import NumberDisplay from 'src/components/Number';
import { ExternalLinks } from 'src/config';
import styled from 'styled-components';
interface HowItWorksProps {
  costPerTicket: BigNumber;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ costPerTicket }) => {
  return (
    <Box>
      <BoxHeader bg="#12161e">
        <BoxTitle>How It Works</BoxTitle>
      </BoxHeader>
      <BoxBody>
        <StyledWrapper>
          <StyledItem>
            <StyledOrder>1</StyledOrder>
            <StyledContent>
              One Ticket is{' '}
              <NumberDisplay
                value={costPerTicket}
                decimals={18}
                precision={0}
                keepZeros={true}
              />{' '}
              TITAN.{' '}You can purchase up to 50 tickets per transaction.
              {' '}
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder>2</StyledOrder>
            <StyledContent>
            If there are no winners per round, the prize accumulates to the next one. If there are multiple winners per round, the price is equally divided.{' '}
              <a href="https://titandaox.gitbook.io/titandao/initiatives/clubhouse/titan-jackpot" target="_blank">
                Please see rules and examples
              </a>
              .
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>3</StyledOrder>
            <StyledContent>
              <div>A tax is deducted from the prize pool for token burns to launch new products for the TITAN community.</div>
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>4</StyledOrder>
            <StyledContent>
              <div>Even when you do not win you are helping make TITAN great again via TITAN burns</div>
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>5</StyledOrder>
            <StyledContent>
              <div>There are 2 rounds per week, on Mondays and Thursdays at 9 am UTC</div>
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>6</StyledOrder>
            <StyledContent>
              <div>If accessing the game using mobile, please use the <a href="https://metamask.io/" target="_blank">
              Metamask browser</a></div>
            </StyledContent>
          </StyledItem>
          <StyledItem>
            <StyledOrder lastOrder>7</StyledOrder>
            <StyledContent>
              <div>Play, burn and win while having fun!</div>
            </StyledContent>
          </StyledItem>
        </StyledWrapper>
      </BoxBody>
    </Box>
  );
};

const StyledWrapper = styled.div`
  padding: 12px 25px;
  @media (max-width: 768px) {
    padding: 12px 1px;
  }
`;

const StyledItem = styled.div`
  display: flex;
  align-items: start;
  :not(:last-child) {
    padding-bottom: 30px;
  }
  @media (max-width: 768px) {
    min-height: 70px;
    :not(:last-child) {
      padding-bottom: 20px;
    }
  }
`;

const StyledOrder = styled.div<{ lastOrder?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #a3212a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  position: relative;
  ${({ lastOrder }) =>
    !lastOrder &&
    `:after {
      content: '';
      height: 30px;
      width: 1px;
      border-right: 0px dashed #f2f2f2;
      top: 32px;
      position: absolute;
      @media (max-width: 768px) {
        height: 60px;
      }
    }`}
`;

const StyledContent = styled.div`
  margin-left: 15px;
  font-weight: 300;
  flex: 1;
  a {
    color: ${(p) => p.theme.color.orange[500]};
    font-weight: 600;
    &:hover {
      color: ${(p) => p.theme.color.orange[300]};
    }
  }
  @media (max-width: 768px) {
    margin-left: 8px;
  }
  ul {
    margin: 0;
  }
`;

export default HowItWorks;
