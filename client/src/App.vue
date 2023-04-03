<template>
    <router-view
        :inventory="inventory"
        :addInv="addInventory"
        :removeInv="removeInventory"
        :updateInv="updateInventory"
    />
</template>
<script>
import PhotoDataService from "@/services/PhotoDataService";
export default {
    data() {
        return {
            inventory: [],
        };
    },
    methods: {
        addInventory(data) {
            this.inventory.push(data);
        },
        removeInventory(index) {
            this.inventory.splice(index, 1);
        },
        removeItem(name) {
            delete this.cart[name];
        },
        updateInventory(index, data) {
            this.inventory[index].name = data.name;
            this.inventory[index].photo = data.photo;
            this.inventory[index].price = data.price;
            this.inventory[index].description = data.description;
            this.inventory[index].categorie = data.type;
        },
    },
    mounted() {
        PhotoDataService.getAll().then((response) => {
            console.log(response.data);
            this.inventory = response.data;
        });
    },
};
</script>
<style></style>
