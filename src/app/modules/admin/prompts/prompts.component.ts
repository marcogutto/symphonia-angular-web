import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-prompts',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">Gestão de Prompts</h1>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Novo Prompt
                </button>
            </div>

            <!-- Filtros -->
            <div class="bg-white p-4 rounded-lg shadow mb-6">
                <div class="flex gap-4">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todas as Categorias</option>
                        <option>FAQ</option>
                        <option>Suporte</option>
                        <option>Vendas</option>
                    </select>
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Canais</option>
                        <option>WhatsApp</option>
                        <option>Telegram</option>
                        <option>Web</option>
                    </select>
                </div>
            </div>

            <!-- Lista de Prompts -->
            <div class="bg-white rounded-lg shadow">
                <div class="p-4 border-b">
                    <h3 class="text-lg font-semibold">Templates de Prompt</h3>
                </div>
                <div class="divide-y">
                    <div class="p-4 hover:bg-gray-50">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h4 class="font-medium">Saudação Inicial</h4>
                                <p class="text-sm text-gray-500 mt-1">Olá! Como posso ajudá-lo hoje?</p>
                                <div class="flex gap-2 mt-2">
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">FAQ</span>
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">v2.1</span>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button class="text-blue-600 hover:text-blue-800">Testar</button>
                                <button class="text-gray-600 hover:text-gray-800">Editar</button>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 hover:bg-gray-50">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h4 class="font-medium">Transferir para Humano</h4>
                                <p class="text-sm text-gray-500 mt-1">Vou transferir você para um atendente...</p>
                                <div class="flex gap-2 mt-2">
                                    <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Suporte</span>
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">v1.5</span>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button class="text-blue-600 hover:text-blue-800">Testar</button>
                                <button class="text-gray-600 hover:text-gray-800">Editar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PromptsComponent {}