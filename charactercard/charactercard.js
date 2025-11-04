const character = {
    name: "Swamp Beast Diplomat",
    class: "Warrior",
    level: 1,
    health: 100,
  
    attacked: function() {
      if (this.health > 0) {
        this.health -= 20;
        if (this.health <= 0) {
          this.health = 0;
          alert(`${this.name} has died in the swamp... 🪦`);
        }
        document.getElementById("health").textContent = this.health;
      }
    },
  
    levelUp: function() {
      this.level += 1;
      document.getElementById("level").textContent = this.level;
    }
  };