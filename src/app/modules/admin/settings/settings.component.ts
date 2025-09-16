import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-6">Configurações Gerais</h1>

            <div class="space-y-6">
                <!-- Configuração de Canais -->
                <div class="bg-white rounded-lg shadow">
                    <div class="p-4 border-b">
                        <h3 class="text-lg font-semibold">Canais de Atendimento</h3>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div class="flex items-center justify-between p-4 border rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                                        📱
                                    </div>
                                    <div>
                                        <h4 class="font-medium">WhatsApp Business</h4>
                                        <p class="text-sm text-gray-500">API oficial do WhatsApp</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ativo</span>
                                    <button class="text-blue-600 hover:text-blue-800">Configurar</button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 border rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                                        ✈️
                                    </div>
                                    <div>
                                        <h4 class="font-medium">Telegram</h4>
                                        <p class="text-sm text-gray-500">Bot do Telegram</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="px-2 py-1 bg-gray-100 text-gray-800 rounded text-sm">Inativo</span>
                                    <button class="text-blue-600 hover:text-blue-800">Configurar</button>
                                </div>
                            </div>
                            <div class="flex items-center justify-between p-4 border rounded-lg">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                                        💬
                                    </div>
                                    <div>
                                        <h4 class="font-medium">WebChat</h4>
                                        <p class="text-sm text-gray-500">Chat integrado no site</p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-3">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ativo</span>
                                    <button class="text-blue-600 hover:text-blue-800">Configurar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Configurações do Bot -->
                <div class="bg-white rounded-lg shadow">
                    <div class="p-4 border-b">
                        <h3 class="text-lg font-semibold">Configurações do Bot</h3>
                    </div>
                    <div class="p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Idioma Padrão</label>
                                <select class="w-full border rounded-lg px-3 py-2">
                                    <option>Português (BR)</option>
                                    <option>Inglês (US)</option>
                                    <option>Espanhol (ES)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Timeout de Resposta (segundos)</label>
                                <input type="number" value="30" class="w-full border rounded-lg px-3 py-2">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Políticas de Fallback -->
                <div class="bg-white rounded-lg shadow">
                    <div class="p-4 border-b">
                        <h3 class="text-lg font-semibold">Políticas de Fallback</h3>
                    </div>
                    <div class="p-6">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Transferir para humano após quantas tentativas?
                                </label>
                                <input type="number" value="3" class="w-full border rounded-lg px-3 py-2">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Reprocessar com IA após falha?
                                </label>
                                <div class="flex gap-4">
                                    <label class="flex items-center">
                                        <input type="radio" name="reprocess" value="yes" class="mr-2">
                                        Sim
                                    </label>
                                    <label class="flex items-center">
                                        <input type="radio" name="reprocess" value="no" class="mr-2" checked>
                                        Não
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">
                                    Horário de Funcionamento
                                </label>
                                <div class="grid grid-cols-2 gap-4">
                                    <input type="time" value="08:00" class="border rounded-lg px-3 py-2">
                                    <input type="time" value="18:00" class="border rounded-lg px-3 py-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Botão Salvar -->
                <div class="flex justify-end">
                    <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Salvar Configurações
                    </button>
                </div>
            </div>
        </div>
    `
})
export class SettingsComponent {}