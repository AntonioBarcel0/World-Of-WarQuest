let quests = [];
let currentClass = 'aventurero';

const questForm = document.getElementById('questForm');
const questInput = document.getElementById('questInput');
const questList = document.getElementById('questList');
const emptyMessage = document.getElementById('emptyMessage');
const totalQuestsSpan = document.getElementById('totalQuests');
const completedQuestsSpan = document.getElementById('completedQuests');
const pendingQuestsSpan = document.getElementById('pendingQuests');
const characterClassSpan = document.getElementById('characterClass');

function init() {
    loadCharacterClass();
    loadQuests();
    registerEventListeners();
    console.log(`Aplicación inicializada para clase: ${currentClass}`);
}

function loadCharacterClass() {
    const characterClass = localStorage.getItem('selectedClass');
    if (characterClass) {
        currentClass = characterClass.toLowerCase();
        characterClassSpan.textContent = capitalizeFirst(currentClass);
    } else {
        currentClass = 'aventurero';
        characterClassSpan.textContent = 'Aventurero';
    }
}

function loadQuests() {
    const storageKey = `quests_${currentClass}`;
    const storedQuests = localStorage.getItem(storageKey);
    
    if (storedQuests) {
        try {
            quests = JSON.parse(storedQuests);
            console.log(`${quests.length} quest(s) cargadas para ${currentClass}`);
        } catch (error) {
            console.error('Error al parsear quests:', error);
            quests = [];
        }
    } else {
        quests = [];
        console.log(`No hay quests guardadas para ${currentClass}`);
    }
    
    renderQuests();
}

function saveQuests() {
    try {
        const storageKey = `quests_${currentClass}`;
        localStorage.setItem(storageKey, JSON.stringify(quests));
        console.log(`Quests guardadas para ${currentClass} en localStorage`);
    } catch (error) {
        console.error('Error al guardar quests:', error);
    }
}

function registerEventListeners() {
    questForm.addEventListener('submit', handleAddQuest);
}

function handleAddQuest(event) {
    event.preventDefault();
    
    const questTitle = questInput.value.trim();
    
    if (questTitle === '') {
        alert('Por favor, escribe el título de la misión');
        return;
    }
    
    const newQuest = {
        id: Date.now(),
        title: questTitle,
        completed: false,
        createdAt: new Date().toISOString(),
        characterClass: currentClass
    };
    
    quests.push(newQuest);
    saveQuests();
    renderQuests();
    
    questInput.value = '';
    questInput.focus();
    
    console.log(`Quest agregada para ${currentClass}:`, newQuest);
}

function completeQuest(questId) {
    const quest = quests.find(q => q.id === questId);
    
    if (quest && !quest.completed) {
        quest.completed = true;
        quest.completedAt = new Date().toISOString();
        
        saveQuests();
        renderQuests();
        
        console.log(`Quest completada para ${currentClass}:`, quest);
    }
}

function deleteQuest(questId) {
    const questIndex = quests.findIndex(q => q.id === questId);
    
    if (questIndex !== -1) {
        const deletedQuest = quests.splice(questIndex, 1)[0];
        
        saveQuests();
        renderQuests();
        
        console.log(`Quest eliminada para ${currentClass}:`, deletedQuest);
    }
}

function renderQuests() {
    questList.innerHTML = '';
    
    if (quests.length === 0) {
        showEmptyMessage();
        updateStats();
        return;
    }
    
    hideEmptyMessage();
    
    quests.forEach(quest => {
        const questElement = createQuestElement(quest);
        questList.appendChild(questElement);
    });
    
    updateStats();
}

function createQuestElement(quest) {
    const li = document.createElement('li');
    li.className = `quest-item ${quest.completed ? 'completed' : ''}`;
    li.dataset.id = quest.id;
    
    const questContent = document.createElement('div');
    questContent.className = 'quest-content';
    
    const questTitle = document.createElement('span');
    questTitle.className = 'quest-title';
    questTitle.textContent = quest.title;
    
    questContent.appendChild(questTitle);
    
    const questActions = document.createElement('div');
    questActions.className = 'quest-actions';
    
    const completeBtn = document.createElement('button');
    completeBtn.className = 'btn btn-complete';
    completeBtn.textContent = quest.completed ? '✓ Completada' : 'Completar';
    completeBtn.disabled = quest.completed;
    completeBtn.onclick = () => completeQuest(quest.id);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-delete';
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.onclick = () => {
        if (confirm('¿Estás seguro de eliminar esta misión?')) {
            deleteQuest(quest.id);
        }
    };
    
    questActions.appendChild(completeBtn);
    questActions.appendChild(deleteBtn);
    
    li.appendChild(questContent);
    li.appendChild(questActions);
    
    return li;
}

function updateStats() {
    const total = quests.length;
    const completed = quests.filter(q => q.completed).length;
    const pending = total - completed;
    
    totalQuestsSpan.textContent = total;
    completedQuestsSpan.textContent = completed;
    pendingQuestsSpan.textContent = pending;
}

function showEmptyMessage() {
    emptyMessage.classList.remove('hidden');
}

function hideEmptyMessage() {
    emptyMessage.classList.add('hidden');
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function debugShowAllQuests() {
    console.log('=== QUESTS DE TODAS LAS CLASES ===');
    
    const classes = ['guerrero', 'picaro', 'mago', 'aventurero'];
    
    classes.forEach(className => {
        const storageKey = `quests_${className}`;
        const questsData = localStorage.getItem(storageKey);
        
        if (questsData) {
            const questsArray = JSON.parse(questsData);
            console.log(`\n${className.toUpperCase()}: ${questsArray.length} quest(s)`);
            questsArray.forEach((quest, index) => {
                console.log(`  ${index + 1}. ${quest.title} - ${quest.completed ? 'Completada' : 'Pendiente'}`);
            });
        } else {
            console.log(`\n${className.toUpperCase()}: Sin quests`);
        }
    });
    
    console.log('\n=================================');
}

function debugClearAllQuests() {
    const classes = ['guerrero', 'picaro', 'mago', 'aventurero'];
    
    classes.forEach(className => {
        const storageKey = `quests_${className}`;
        localStorage.removeItem(storageKey);
    });
    
    console.log('Todas las quests han sido eliminadas de localStorage');
    location.reload();
}

window.debugShowAllQuests = debugShowAllQuests;
window.debugClearAllQuests = debugClearAllQuests;

document.addEventListener('DOMContentLoaded', init);
