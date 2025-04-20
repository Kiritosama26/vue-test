<template>

    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="añardirtarea">
        <ul>
            <li v-for="(tarea,index) in tareas" :key="index">{{ tarea }}
                <button @click="eliminartarea(index)" class="bg-danger">Eliminar</button>
            </li>
            
        </ul>
    </div>

</template>

<script setup>
import {ref} from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');


const añardirtarea = () =>{
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value='';
}

const eliminartarea = (index) =>{

    tareas.value.splice(index,1);

}
</script>

<style></style>