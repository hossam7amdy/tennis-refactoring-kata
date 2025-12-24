import { TennisGame } from "./TennisGame";

enum Score {
  "Love",
  "Fifteen",
  "Thirty",
  "Forty",
}

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === "player1") this.m_score1 += 1;
    else this.m_score2 += 1;
  }

  getScore(): string {
    let score: string = "";
    if (this.m_score1 === this.m_score2) {
      switch (this.m_score1) {
        case 0:
          score = "Love-All";
          break;
        case 1:
          score = "Fifteen-All";
          break;
        case 2:
          score = "Thirty-All";
          break;
        default:
          score = "Deuce";
          break;
      }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = "Advantage player1";
      else if (minusResult === -1) score = "Advantage player2";
      else if (minusResult >= 2) score = "Win for player1";
      else score = "Win for player2";
    } else {
      score = this.getCurrentScore();
    }
    return score;
  }

  private getCurrentScore(): string {
    const player1Score = Score[this.m_score1];
    const player2Score = Score[this.m_score2];
    return `${player1Score}-${player2Score}`;
  }
}
