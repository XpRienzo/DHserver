'use strict';

exports.BattleScripts = {
	init: function() {
		Object.values(this.data.Movedex).forEach(move => {
			let bannedMoves = {'Baton Pass':1, 'Detect':1, 'Mat Block':1, 'Parting Shot':1, 'Protect':1, 'Roar':1, 'Skill Swap':1, 'Whirlwind':1};
			if (move.category === 'Status' && !bannedMoves[move.name]) {
				this.data.Abilities[move.id] = {
					desc: move.desc,
					shortDesc: move.shortDesc,
					id: move.id,
					name: move.name,
					onStart: function (pokemon) {
						this.add('-activate', pokemon, 'ability: ' + move.name);
						this.useMove(move.id, pokemon);
					},
				};
			}
		});
	},
}