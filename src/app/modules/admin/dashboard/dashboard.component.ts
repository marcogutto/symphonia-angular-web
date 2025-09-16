import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="p-6">
            <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
            
            <!-- Indicadores -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="text-sm text-gray-500">Taxa de Resolução</h3>
                    <p class="text-2xl font-bold text-green-600">85%</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="text-sm text-gray-500">Tempo Médio</h3>
                    <p class="text-2xl font-bold text-blue-600">2.3s</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="text-sm text-gray-500">Conversas Ativas</h3>
                    <p class="text-2xl font-bold text-purple-600">142</p>
                </div>
                <div class="bg-white p-4 rounded-lg shadow">
                    <h3 class="text-sm text-gray-500">% Falhas</h3>
                    <p class="text-2xl font-bold text-red-600">15%</p>
                </div>
            </div>

            <!-- Gráficos -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-lg font-semibold mb-4">Uso por Canal</h3>
                    <div class="h-64 flex items-center justify-center text-gray-500">
                        [Gráfico de Canais]
                    </div>
                </div>
                <div class="bg-white p-6 rounded-lg shadow">
                    <h3 class="text-lg font-semibold mb-4">Conversas por Hora</h3>
                    <div class="h-64 flex items-center justify-center text-gray-500">
                        [Gráfico Temporal]
                    </div>
                </div>
            </div>
        </div>
    `
})
export class DashboardComponent {}