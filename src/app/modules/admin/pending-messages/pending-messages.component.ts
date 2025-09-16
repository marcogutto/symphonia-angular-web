import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-pending-messages',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-6">Mensagens Pendentes</h1>

            <!-- Filtros -->
            <div class="bg-white p-4 rounded-lg shadow mb-6">
                <div class="flex gap-4">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Canais</option>
                        <option>WhatsApp</option>
                        <option>Telegram</option>
                        <option>Web</option>
                    </select>
                    <input type="date" class="border rounded-lg px-3 py-2">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Tipo de Falha</option>
                        <option>Não compreendeu</option>
                        <option>Sem resposta</option>
                        <option>Erro técnico</option>
                    </select>
                </div>
            </div>

            <!-- Lista de Mensagens -->
            <div class="bg-white rounded-lg shadow">
                <div class="p-4 border-b">
                    <h3 class="text-lg font-semibold">Conversas Não Respondidas</h3>
                </div>
                <div class="divide-y">
                    <div class="p-4 hover:bg-gray-50">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="w-2 h-2 bg-red-500 rounded-full"></span>
                                    <span class="font-medium">Cliente #1234</span>
                                    <span class="text-sm text-gray-500">WhatsApp</span>
                                    <span class="text-sm text-gray-500">há 15 min</span>
                                </div>
                                <p class="text-gray-700 mb-2">"Preciso cancelar meu pedido urgente"</p>
                                <span class="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">Não compreendeu</span>
                            </div>
                            <div class="flex gap-2">
                                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                                    Encaminhar
                                </button>
                                <button class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                                    Treinar IA
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 hover:bg-gray-50">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <div class="flex items-center gap-2 mb-2">
                                    <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                                    <span class="font-medium">Cliente #5678</span>
                                    <span class="text-sm text-gray-500">Telegram</span>
                                    <span class="text-sm text-gray-500">há 32 min</span>
                                </div>
                                <p class="text-gray-700 mb-2">"Como faço para alterar meu endereço?"</p>
                                <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Sem resposta</span>
                            </div>
                            <div class="flex gap-2">
                                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                                    Encaminhar
                                </button>
                                <button class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                                    Treinar IA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PendingMessagesComponent {}