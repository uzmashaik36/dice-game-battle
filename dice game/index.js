 let totalRolls = 0;

    function rollDice() {
      const dice1 = Math.floor(Math.random() * 6) + 1;
      const dice2 = Math.floor(Math.random() * 6) + 1;
      document.getElementById('dice1').textContent = getDiceFace(dice1);
      document.getElementById('dice2').textContent = getDiceFace(dice2);

      totalRolls++;
      document.getElementById('rollCount').textContent = `Total Rolls: ${totalRolls}`;

      const time = new Date().toLocaleTimeString();
      const result = `🎲 ${time} → Player 1: ${dice1}, Player 2: ${dice2}`;
      const li = document.createElement('li');
      li.textContent = result;
      document.getElementById('historyList').prepend(li);

      const winnerText = dice1 > dice2 ? '🏆 Player 1 Wins!' : dice2 > dice1 ? '🏆 Player 2 Wins!' : "🤝 It's a Draw!";
      document.getElementById('winner').textContent = winnerText;

      if (dice1 !== dice2) {
        confetti();
        document.getElementById('winSound').play();
      }
    }

    function getDiceFace(num) {
      const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
      return faces[num - 1];
    }
      