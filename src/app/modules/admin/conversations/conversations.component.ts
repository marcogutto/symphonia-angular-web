import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-conversations',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-6">Monitoramento de Conversas</h1>

            <!-- Filtros -->
            <div class="bg-white p-4 rounded-lg shadow mb-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input type="text" placeholder="Buscar conversa..." class="border rounded-lg px-3 py-2">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Canais</option>
                        <option>WhatsApp</option>
                        <option>Telegram</option>
                        <option>Web</option>
                    </select>
                    <input type="date" class="border rounded-lg px-3 py-2">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Status</option>
                        <option>Resolvido</option>
                        <option>Pendente</option>
                        <option>Transferido</option>
                    </select>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Lista de Conversas -->
                <div class="lg:col-span-1 bg-white rounded-lg shadow">
                    <div class="p-4 border-b">
                        <h3 class="text-lg font-semibold">Conversas Recentes</h3>
                    </div>
                    <div class="divide-y max-h-96 overflow-y-auto">
                        <div class="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-blue-500">
                            <div class="flex justify-between items-start mb-2">
                                <span class="font-medium">Cliente #1234</span>
                                <span class="text-xs text-gray-500">14:30</span>
                            </div>
                            <p class="text-sm text-gray-600 truncate">Preciso de ajuda com meu pedido...</p>
                            <div class="flex gap-2 mt-2">
                                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">WhatsApp</span>
                                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Resolvido</span>
                            </div>
                        </div>
                        <div class="p-4 hover:bg-gray-50 cursor-pointer">
                            <div class="flex justify-between items-start mb-2">
                                <span class="font-medium">Cliente #5678</span>
                                <span class="text-xs text-gray-500">13:45</span>
                            </div>
                            <p class="text-sm text-gray-600 truncate">Como faço para cancelar?</p>
                            <div class="flex gap-2 mt-2">
                                <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Telegram</span>
                                <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Pendente</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Replay da Conversa -->
                <div class="lg:col-span-2 bg-white rounded-lg shadow">
                    <div class="p-4 border-b">
                        <h3 class="text-lg font-semibold">Replay - Cliente #1234</h3>
                    </div>
                    <div class="p-4 h-96 overflow-y-auto">
                        <div class="space-y-4">
                            <div class="flex justify-start">
                                <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
                                    <p class="text-sm">Olá, preciso de ajuda com meu pedido #12345</p>
                                    <span class="text-xs text-gray-500">14:25</span>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <div class="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                                    <p class="text-sm">Olá! Vou verificar seu pedido. Um momento, por favor.</p>
                                    <span class="text-xs text-blue-200">14:26</span>
                                </div>
                            </div>
                            <div class="flex justify-end">
                                <div class="bg-blue-600 text-white rounded-lg p-3 max-w-xs">
                                    <p class="text-sm">Seu pedido está sendo preparado e será enviado hoje. Código de rastreamento: BR123456789</p>
                                    <span class="text-xs text-blue-200">14:27</span>
                                </div>
                            </div>
                            <div class="flex justify-start">
                                <div class="bg-gray-100 rounded-lg p-3 max-w-xs">
                                    <p class="text-sm">Perfeito! Obrigado pela ajuda 😊</p>
                                    <span class="text-xs text-gray-500">14:30</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-t">
                        <div class="flex gap-2">
                            <button class="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-700">
                                Marcar Útil
                            </button>
                            <button class="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                                Usar para Treinamento
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class ConversationsComponent {}