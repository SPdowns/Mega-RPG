export const attack = () => {
  const obj = {
    attack: function() {
      return (this.strength || 0);
    }
  };
  return obj;
};

export const fireball = () => {
  const obj = {
    fireball: function() {
      return (this.intelligence || 0);
    }
  };
  return obj;
};