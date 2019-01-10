function solve(array) {
    let inventory = array[0].split(" ");

    for (let i = 1; i < array.length; i++) {
        let currentItem = array[i].split(' ');
        let command = currentItem[0];
        let equipment = currentItem[1];

        switch (command) {
            case 'Fight':
                return;
            case 'Buy':
                inventory.push(equipment);
                break;
            case 'Trash':
                trashEquipment();
                break;
            case 'Repair':
                repairEquipment();
                break;
            case 'Upgrade':
                upgradeEquipment();
                break;
        }

        function trashEquipment() {
            let index = inventory.indexOf(equipment);
            if (index > -1) {
                inventory.splice(index, 1);
            }
        }

        function repairEquipment() {
            let index = inventory.indexOf(equipment);
            if (index > -1) {
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        }

        function upgradeEquipment() {
            let equipmentForUpgrade = equipment.split('-');
            let elementType = equipmentForUpgrade[0];
            let upgrade = equipmentForUpgrade[1];

            let index = inventory.indexOf(elementType);
            if (index > -1) {
                let item = `${elementType}:${upgrade}`;
                inventory.splice(index + 1, 0, item);
            }
        }
    }

    console.log(inventory.join(' '));
}

solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V', 'Fight!']);
solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!']);