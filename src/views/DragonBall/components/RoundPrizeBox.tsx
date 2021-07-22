import React from 'react';
import { Box, BoxBody, BoxHeader, BoxTitle } from 'src/components/Box';
import styled from 'styled-components';
import { BigNumber } from 'ethers';
import ImgCup from 'src/assets/img/cup.svg';
import NumberDisplay from 'src/components/Number';

interface RoundPrizeBoxProps {
  total: BigNumber;
  prizes: BigNumber[];
  ticketsSold: BigNumber;

}

const RoundPrizeBox: React.FC<RoundPrizeBoxProps> = ({ total, prizes, ticketsSold }) => {
  const jackpot = prizes ? prizes[0] : null;
  const matchFour = prizes ? prizes[1] : null;
  const matchThree = prizes ? prizes[2] : null;

  const total7 = total.mul(7);
  const total70 = total7.div(10);

  const jackpot7 = jackpot.mul(7);
  const jackpot70 = jackpot7.div(10);

  const matchFour7 = matchFour.mul(7);
  const matchFour70 = matchFour7.div(10);

  const matchThree7 = matchThree.mul(7);
  const matchThree70 = matchThree7.div(10);

  return (
    <Box>
      <BoxHeader>
        <BoxTitle>Rewards for this round</BoxTitle>
      </BoxHeader>
      <BoxBody>
        <StyledTotal>
          <img src={ImgCup} />
          <div className="content">
            <div>Current Total Rewards</div>
            <div className="prize-value">
              <NumberDisplay value={total70} decimals={18} precision={0} keepZeros={true} />
              <span className="prize-unit">TITAN</span>
            </div>
          </div>
        </StyledTotal>
        <StyledPrizeTable>
          <div className="row header">
            <div className="left">Reward</div>
            <div className="right">Value</div>
          </div>
          <div className="row">
            <div className="left">Jackpot</div>
            <div className="right jackpot">
              <NumberDisplay value={jackpot70} decimals={18} precision={0} keepZeros={true} />
              <span className="prize-unit">TITAN</span>
            </div>
          </div>
          <div className="row">
            <div className="left">Match 4</div>
            <div className="right">
              <NumberDisplay value={matchFour70} decimals={18} precision={0} keepZeros={true} />
              <span className="prize-unit">TITAN</span>
            </div>
          </div>
          <div className="row">
            <div className="left">Match 3</div>
            <div className="right">
              <NumberDisplay value={matchThree70} decimals={18} precision={0} keepZeros={true} />
              <span className="prize-unit">TITAN</span>
            </div>
          </div>
          <div className="row row-total">
            <div className="total-ticket-sold">
              Total:{' '}
              <NumberDisplay value={ticketsSold} decimals={0} precision={0} keepZeros={true} />{' '}
              Tickets
            </div>
          </div>
        </StyledPrizeTable>
      </BoxBody>
    </Box>
  );
};

const StyledPrizeTable = styled.div`
  .row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 0;
    border-bottom: solid 1px #303030;
    &:last-child {
      border-bottom: none;
    }
    .left {
      font-weight: 700;
    }
    .right {
      font-weight: 600;
      font-size: 20px;
      color: #c0794f;
      .prize-unit {
        font-weight: 500;
        font-size: 0.8rem;
        margin-left: 5px;
        color: #b8b8b8;
      }
      &.jackpot {
        color: #dab03d;
        font-size: 24px;
        font-weight: 500;
        line-height: 1;
      }
    }
    &.header {
      border-bottom: none;
      padding-bottom: 0;
      font-weight: 700;
      font-size: 0.85rem;
      .left,
      .right {
        font-size: 0.85rem;
        color: #b8b8b8 !important;
      }
    }
    &.row-total {
      padding: 0;
      .total-ticket-sold {
        padding-top: 15px;
        padding-bottom: 5px;
        font-size: 1rem;
        font-weight: 700;
        text-align: center;
        margin: 0 auto;
      }
    }
  }
`;

const StyledTotal = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: solid 1px #303030;
  padding-top: 10px;
  padding-bottom: 15px;
  margin-bottom: 0;
  img {
    margin-top: 5px;
  }
  .content {
    margin-left: 15px;
    .prize-value {
      font-size: 2rem;
      line-height: 1.3;
      text-transform: uppercase;
      font-weight: 700;
      color: #eac85c;
    }
    .prize-unit {
      font-size: 1.5rem;
      margin-left: 5px;
      font-weight: 800;
    }
  }
`;

export default RoundPrizeBox;
