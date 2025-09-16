import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-integrations',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">Integrações</h1>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Nova Integração
                </button>
            </div>

            <!-- Integrações Disponíveis -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div class="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">CRM</h3>
                        <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Conectado</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Sincronização com sistema CRM</p>
                    <button class="text-blue-600 hover:text-blue-800 text-sm">Configurar</button>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border-l-4 border-gray-300">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">ERP</h3>
                        <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">Desconectado</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">Integração com sistema ERP</p>
                    <button class="text-blue-600 hover:text-blue-800 text-sm">Conectar</button>
                </div>

                <div class="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <div class="flex items-center justify-between mb-4">
                        <h3 class="text-lg font-semibold">API Externa</h3>
                        <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Configurando</span>
                    </div>
                    <p class="text-gray-600 text-sm mb-4">APIs de terceiros</p>
                    <button class="text-blue-600 hover:text-blue-800 text-sm">Configurar</button>
                </div>
            </div>

            <!-- Configurações de API -->
            <div class="bg-white rounded-lg shadow">
                <div class="p-4 border-b">
                    <h3 class="text-lg font-semibold">Chaves de API</h3>
                </div>
                <div class="p-6">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">OpenAI API Key</label>
                            <input type="password" class="w-full border rounded-lg px-3 py-2" placeholder="sk-...">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">WhatsApp Business API</label>
                            <input type="password" class="w-full border rounded-lg px-3 py-2" placeholder="Token...">
                        </div>
                        <div class="flex gap-2">
                            <button class="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                                Testar Conexão
                            </button>
                            <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class IntegrationsComponent {}