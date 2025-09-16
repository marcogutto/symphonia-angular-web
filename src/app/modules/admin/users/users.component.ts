import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <div class="flex justify-between items-center mb-6">
                <h1 class="text-3xl font-bold">Usuários & Permissões</h1>
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Novo Usuário
                </button>
            </div>

            <!-- Filtros -->
            <div class="bg-white p-4 rounded-lg shadow mb-6">
                <div class="flex gap-4">
                    <input type="text" placeholder="Buscar usuário..." class="border rounded-lg px-3 py-2">
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Perfis</option>
                        <option>Administrador</option>
                        <option>Supervisor</option>
                        <option>Atendente</option>
                    </select>
                    <select class="border rounded-lg px-3 py-2">
                        <option>Todos os Status</option>
                        <option>Ativo</option>
                        <option>Inativo</option>
                    </select>
                </div>
            </div>

            <!-- Lista de Usuários -->
            <div class="bg-white rounded-lg shadow">
                <div class="p-4 border-b">
                    <h3 class="text-lg font-semibold">Usuários do Sistema</h3>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-gray-50">
                            <tr>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Usuário</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Perfil</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Último Acesso</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                            JD
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium">João Silva</p>
                                            <p class="text-sm text-gray-500">joao&#64;empresa.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">Administrador</span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">Há 2 horas</td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ativo</span>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex gap-2">
                                        <button class="text-blue-600 hover:text-blue-800 text-sm">Editar</button>
                                        <button class="text-red-600 hover:text-red-800 text-sm">Desativar</button>
                                    </div>
                                </td>
                            </tr>
                            <tr class="hover:bg-gray-50">
                                <td class="px-6 py-4">
                                    <div class="flex items-center">
                                        <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                                            MS
                                        </div>
                                        <div class="ml-3">
                                            <p class="font-medium">Maria Santos</p>
                                            <p class="text-sm text-gray-500">maria&#64;empresa.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Supervisor</span>
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-500">Há 1 dia</td>
                                <td class="px-6 py-4">
                                    <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Ativo</span>
                                </td>
                                <td class="px-6 py-4">
                                    <div class="flex gap-2">
                                        <button class="text-blue-600 hover:text-blue-800 text-sm">Editar</button>
                                        <button class="text-red-600 hover:text-red-800 text-sm">Desativar</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Permissões -->
            <div class="bg-white rounded-lg shadow mt-6">
                <div class="p-4 border-b">
                    <h3 class="text-lg font-semibold">Matriz de Permissões</h3>
                </div>
                <div class="p-6">
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-2">Funcionalidade</th>
                                    <th class="text-center py-2">Admin</th>
                                    <th class="text-center py-2">Supervisor</th>
                                    <th class="text-center py-2">Atendente</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y">
                                <tr>
                                    <td class="py-2">Criar Fluxos</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">❌</td>
                                </tr>
                                <tr>
                                    <td class="py-2">Editar Prompts</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">❌</td>
                                </tr>
                                <tr>
                                    <td class="py-2">Ver Relatórios</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">✅</td>
                                    <td class="text-center py-2">✅</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class UsersComponent {}