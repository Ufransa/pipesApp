import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
    transform(value: boolean): string {

        // Si el valor es true vuela y si no, no vuela
        return value ? 'Vuela' : 'No vuela'
    }
}