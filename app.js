
new Vue({
  el: '#app',
  data: {
    tab: 'calificaciones',
    nota1: null,
    nota2: null,
    nota3: null,
    asistencia: null,
    resultado: '',
    estado: '',
    nombre: '',
    correo: '',
    password: '',
    repetirPassword: ''
  },
  computed: {
    passwordMismatch() {
      return this.password && this.repetirPassword && this.password !== this.repetirPassword;
    }
  },
  methods: {
    calcularPromedio() {
      if ([this.nota1, this.nota2, this.nota3, this.asistencia].some(v => v === null || isNaN(v))) {
        this.resultado = 'Por favor complete todos los campos correctamente.';
        this.estado = 'Reprobado';
        return;
      }
      if (
        this.nota1 < 10 || this.nota1 > 70 ||
        this.nota2 < 10 || this.nota2 > 70 ||
        this.nota3 < 10 || this.nota3 > 70 ||
        this.asistencia < 0 || this.asistencia > 100
      ) {
        this.resultado = 'Los valores están fuera del rango permitido.';
        this.estado = 'Reprobado';
        return;
      }

      const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
      if (promedio >= 40 && this.asistencia >= 80) {
        this.resultado = `Promedio: ${promedio.toFixed(2)} - Aprobado`;
        this.estado = 'Aprobado';
      } else {
        this.resultado = `Promedio: ${promedio.toFixed(2)} - Reprobado`;
        this.estado = 'Reprobado';
      }
    },
    enviarFormulario() {
      if (
        this.nombre &&
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.correo) &&
        this.password &&
        this.repetirPassword &&
        this.password === this.repetirPassword
      ) {
        alert("El registro se ha realizado correctamente");
      } else {
        alert("Por favor completa correctamente todos los campos.");
      }
    }
  }
});
