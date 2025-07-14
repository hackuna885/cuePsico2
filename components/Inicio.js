app.component("web-inicio", {
  template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    
        <div class="col-md-10 mx-auto">
            <div class="row justify-content-center align-items-center vh-100">
    
                <div class="card border-0 shadow-lg">
                    <div class="card-body p-0">
                        <div class="row">
    
                            <div class="col-md-12 d-md-block animate__animated animate__fadeIn">
                                <div class="col-md-8 mx-auto">
                                    <div class="my-3">
                                        <div class="my-3">
                                            <div class="mx-auto text-center">
                                                <img src="img/logoPsicologia_3D_2.jpg" class="img-fluid" alt="logo"
                                                    style="width: 350px;">
                                            </div>
                                            <h1 class="text-center h2">
                                                Área de Atención Psicológica
                                            </h1>
                                            <br>
                                            <p class="text-justify">
                                                1. Es un requisito obligatorio que todos (a) los (a) pacientes que
                                                solicitan el servicio de atención psicológica por
                                                primera vez tomen la plática de inducción, donde se
                                                brinda información importante sobre sus orientaciones
                                                psicológicas, así como los lineamientos y reglamento
                                                del uso del servicio. Esta plática se imparte todos los
                                                días lunes a las 11: 00 am y a las 4:00 pm.
                                                <br />
                                                <br />
                                                2. Los paciente de primera vez, deberán registrarse en
                                                la plataforma con los siguientes datos, para crear una
                                                cuenta en la plataforma, y de esta manera estar
                                                gestionando sus citas de seguimiento con su terapeuta
                                                asignado.
                                            </p>
                                            <br />
                                            <div class="row justify-content-center">
                                                <div class="col-md-6 my-3">
                                                    <router-link class="a btn btn-secondary btn-lg btn-block" to="/web-registro">
                                                        <i class="fas fa-flag"></i> Regístrate
                                                    </router-link>
                                                </div>
                                                <div class="col-md-6 my-3">
                                                    <a href="#" class="btn btn-success btn-lg btn-block">
                                                        <span class="icon">
                                                            <i class="fas fa-check"></i> Iniciar sesión
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
    
            </div>
    
        </div>
    </div>
    `,
  data() {
    return {
      datos: "",
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
});

app.component("web-registro", {
  template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    
        <div class="col-md-10 mx-auto">
            <div class="row justify-content-center align-items-center vh-100">
    
                <!-- contenido web -->
                <div class="card border-0 shadow-lg">
                    <div class="card-body p-0">
                        <div class="row">
    
                            <div class="col-md-12 d-md-block animate__animated animate__fadeIn">
                                <div class="col-md-8 mx-auto">
                                    <div class="my-3">
                                        <div class="my-3">
                                            <div class="mx-auto text-center">
                                                <img src="img/registro_2.jpg" class="img-fluid" style="width: 350px;">
                                            </div>
                                            <h1 class="text-center h2">
                                                Regístrate
                                            </h1>
                                            <br>
                                            <p class="text-justify">
                                                Los y las pacientes de primera vez, deberán registrarse en
                                                la plataforma con los siguientes datos, para crear una
                                                cuenta en la plataforma, y de esta manera estar
                                                gestionando sus citas de seguimiento con su terapeuta
                                                asignado.
                                            </p>
                                            <br />
                                            <div class="row text-center mx-auto">
                                                <router-link class="col-md-6 my-3 text-center" to="/web-regEst">
                                                    <img src="img/estudiante.jpg" class="img-fluid" style="width: 150px;">
                                                    <p class="h6">Registro Estudiante</p>
                                                </router-link>

                                                <router-link class="col-md-6 my-3 text-center" to="/web-regDoc">
                                                    <img src="img/docente.jpg" class="img-fluid" style="width: 150px;">
                                                    <p class="h6">Registro Docente</p>
                                                </router-link>
                                            </div>
                                            <br>
                                            <div class="row justify-content-center">
                                                <div class="col-md-12 my-3">

                                                    <router-link class="a btn btn-secondary btn-lg btn-block" to="/">
                                                        <i class="fas fas fa-arrow-left"></i> Regresar
                                                    </router-link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                <!-- contenido web -->
    
    
            </div>
    
        </div>
    </div>
    `,
  data() {
    return {
      datos: "",
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
});

app.component("web-regEst", {
  template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    
        <div class="col-md-10 mx-auto">
            <div class="row justify-content-center align-items-center vh-100">
    
                <!-- contenido web -->
                <div class="card border-0 shadow-lg">
                    <div class="card-body p-0">
                        <div class="row">
    
                            <div class="col-md-12 d-md-block animate__animated animate__fadeIn">
                                <div class="col-md-8 mx-auto">
                                    <div class="my-3">
                                        <div class="my-3">
                                            <div class="mx-auto text-center">
                                                <img src="img/estudiante.jpg" class="img-fluid" style="width: 350px;">
                                            </div>
                                            <h1 class="text-center h2">
                                                Estudiantes
                                            </h1>
                                            <br>
                                            <p class="text-justify">
                                                Los y las pacientes de primera vez, deberán registrarse en
                                                la plataforma con los siguientes datos, para crear una
                                                cuenta en la plataforma, y de esta manera estar
                                                gestionando sus citas de seguimiento con su terapeuta
                                                asignado.
                                            </p>
                                            <br>
                                            <!-- formulario -->
                                            <h3>Datos del estudiante</h3>
                                            <br>
                                            <form class="user" @submit.prevent="alta">
                                                <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="matricula" placeholder="Matrícula" pattern="[0-9]{8,12}"
                                                            maxlength="12" @keypress="soloNumeros" onkeypress="return event.charCode >= 48 && event.charCode <= 57" v-model="matricula" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="email" class="form-control form-control-user"
                                                            id="correo" placeholder="Correo Institucional (@utfv.edu.mx)"
                                                            @keypress="soloCorreo" v-model="correoInst" required>
                                                    </div>
                                                    <div class="form-group" v-html="datos"></div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="passUno" placeholder="Contraseña..." minlength="6" v-model="passUsr" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="password" class="form-control form-control-user"
                                                            id="passDos" placeholder="Repetir contraseña..." minlength="6" :disabled="estadoPass" v-model="passUsrDos" required>
                                                    </div>

                                                    <div :class="notificaEstadoPass" role="alert">
                                                      {{validaContrasena}}
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="form-group row">
                                                    <div class="col-sm-6 mb-3 mb-sm-3">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="nombre" placeholder="Nombre" @keypress="soloLetras" onKeypress="if (event.keyCode > 32 && event.keyCode < 48 || event.keyCode > 57 && event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 && event.keyCode < 160 || event.keyCode > 166 && event.keyCode < 190) event.returnValue = false;"
                                                            v-model="nombre" required>
                                                    </div>
                                                    <div class="col-sm-6"></div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="aPaterno" placeholder="Apellido Paterno"
                                                            @keypress="soloLetras" onKeypress="if (event.keyCode > 32 && event.keyCode < 48 || event.keyCode > 57 && event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 && event.keyCode < 160 || event.keyCode > 166 && event.keyCode < 190) event.returnValue = false;" v-model="aPaterno" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="aMaterno" placeholder="Apellido Materno"
                                                            @keypress="soloLetras" onKeypress="if (event.keyCode > 32 && event.keyCode < 48 || event.keyCode > 57 && event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 && event.keyCode < 160 || event.keyCode > 166 && event.keyCode < 190) event.returnValue = false;" v-model="aMaterno" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <label class="form-label">Fecha de nacimiento:</label>
                                                        <input type="date" class="form-control form-control-user" id="fecha"
                                                            placeholder="Fecha de nacimiento" maxlength="10" v-model="fechaNa" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <label class="form-label">Teléfono personal:</label>
                                                        <input type="text" class="form-control form-control-user"
                                                            id="telefono" placeholder="Teléfono" pattern="[0-9]{8,13}"
                                                            @keypress="soloNumeros" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="10" v-model="telPersonal" required>
                                                    </div>
                                                    <div class="col-sm-12 mb-3">
                                                        <label class="form-label">División Académica:</label>
                                                        <select class="form-control custom-select"
                                                            v-model="selectedDivision">
                                                            <option value="">Selecciona una división</option>
                                                            <option v-for="division in divisions" :key="division.value"
                                                                :value="division.value">
                                                                {{ division.text }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                    <div class="col-sm-12 mb-3">
                                                        <label class="form-label">Programa Educativo:</label>
                                                        <select class="form-control custom-select"
                                                            v-model="selectedSpecialty" :disabled="!selectedDivision">
                                                            <option value="">Selecciona una carrera</option>
                                                            <option v-for="specialty in filteredSpecialties"
                                                                :key="specialty.value" :value="specialty.value">
                                                                {{ specialty.text }}
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="form-group row">
                                                    <div class="col-sm-8 mb-3">
                                                        <label>Nombre del tutor(a) Académico(a):</label>
                                                        <input type="text" class="form-control form-control-user"
                                                            id="nombreTut" placeholder="Nombre" @keypress="soloLetras" onKeypress="if (event.keyCode > 32 && event.keyCode < 48 || event.keyCode > 57 && event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 && event.keyCode < 160 || event.keyCode > 166 && event.keyCode < 190) event.returnValue = false;"
                                                            v-model="nomTutor" required>
                                                    </div>
                                                    <div class="col-sm-4 mb-3"></div>
                                                </div>
                                                <hr>
                                                <div class="form-group row">
                                                    <p class="ml-3">Nombre y número telefónico de Red de Apoyo:</p>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="nombreRed" placeholder="Nombre" @keypress="soloLetras" onKeypress="if (event.keyCode > 32 && event.keyCode < 48 || event.keyCode > 57 && event.keyCode < 65 || event.keyCode > 90 && event.keyCode < 97 || event.keyCode > 122 && event.keyCode < 160 || event.keyCode > 166 && event.keyCode < 190) event.returnValue = false;"
                                                            v-model="nomRed" required>
                                                    </div>
                                                    <div class="col-sm-6 mb-3">
                                                        <input type="text" class="form-control form-control-user"
                                                            id="telefonoRed" placeholder="Teléfono" pattern="[0-9]{8,13}"
                                                            @keypress="soloNumeros" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="10" v-model="telRed" required>
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="form-group row">
                                                    <div class="col-sm-12 mb-3">
                                                        <label>Selecciona el turno contrario a tu horario de clases para
                                                            recibir atención psicológica:</label>
                                                        <div class="text-center mt-4">
                                                            <div class="form-check form-check-inline mx-3 mx-sm-5">
                                                                <input class="form-check-input" type="radio" name="turno"
                                                                    value="Matutino" v-model="turno" required>
                                                                <label class="form-check-label ml-2"> Matutino</label>
                                                            </div>
                                                            <div class="form-check form-check-inline mx-3 mx-sm-5">
                                                                <input class="form-check-input" type="radio" name="turno"
                                                                    value="Vespertino" v-model="turno" required>
                                                                <label class="form-check-label ml-2"> Vespertino</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <br>
                                                <div class="row justify-content-center">
                                                  <div class="col-md-6 my-3">
                                                    <router-link class="a btn btn-secondary btn-lg btn-block" to="/web-registro">
                                                      <i class="fas fas fa-arrow-left"></i> Regresar
                                                    </router-link>
                                                  </div>
                                                  
                                                  <div class="col-md-6 my-3">
                                                    
                                                    <button class="btn btn-success btn-lg btn-block"
                                                    :disabled="this.matricula != '' && this.correoInst != '' && this.passUsr != '' && this.passUsrDos != '' && this.nombre != '' && this.aPaterno != '' && this.aMaterno != '' && this.fechaNa != '' && this.telPersonal != '' && this.selectedDivision != '' && this.selectedSpecialty != '' && this.nomTutor != '' && this.nomRed != '' && this.telRed != '' && this.turno != '' && this.validaBtn === true ? this.estadoBtn = flase : this.estadoBtn = true">
                                                    <i class="fas fas fa-arrow-right"></i> Continuar
                                                  </button>
                                                  
                                                </div>

                                              </form>
                                              <!-- formulario -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                <!-- contenido web -->
    
    
            </div>
    
        </div>
    </div>
    `,
  data() {
    return {
      datos: '',
      matricula: "",
      correoInst: "",
      passUsr: "",
      passUsrDos: "",
      estadoPass: true,
      notificaEstadoPass: "",
      validaBtn: false,
      estadoBtn: false,
      nombre: "",
      aPaterno: "",
      aMaterno: "",
      fechaNa: "",
      telPersonal: "",
      selectedDivision: "",
      selectedSpecialty: "",
      nomTutor: "",
      nomRed: "",
      telRed: "",
      turno: "",
      divisions: [
        {
          value: "División Académica de Administración",
          text: "División Académica de Administración",
        },
        {
          value: "División Académica de Ciencias de la Salud",
          text: "División Académica de Ciencias de la Salud",
        },
        {
          value: "División Académica de Contabilidad Corporativa",
          text: "División Académica de Contabilidad Corporativa",
        },
        {
          value: "División Académica de Informática",
          text: "División Académica de Informática",
        },
        {
          value: "División Académica de Mantenimiento Industrial y Mecatrónica",
          text: "División Académica de Mantenimiento Industrial y Mecatrónica",
        },
        {
          value: "División Académica de Tecnología Ambiental",
          text: "División Académica de Tecnología Ambiental",
        },
        {
          value: "División Académica de Telemática",
          text: "División Académica de Telemática",
        },
      ],
      allSpecialties: {
        "División Académica de Administración": [
          { value: "T.S.U. en Contaduría", text: "T.S.U. en Contaduría" },
          {
            value: "T.S.U. en Contaduría, área Finanzas",
            text: "T.S.U. en Contaduría, área Finanzas",
          },
          {
            value:
              "T.S.U. en Emprendimiento, Formulación y Evaluación de Proyectos",
            text: "T.S.U. en Emprendimiento, Formulación y Evaluación de Proyectos",
          },
          {
            value: "T.S.U. en Gestión de Capital Humano",
            text: "T.S.U. en Gestión de Capital Humano",
          },
          {
            value: "T.S.U. en Administración Área Capital Humano",
            text: "T.S.U. en Administración Área Capital Humano",
          },
          {
            value: "Licenciatura en Gestión de Capital Humano",
            text: "Licenciatura en Gestión de Capital Humano",
          },
        ],
        "División Académica de Ciencias de la Salud": [
          { value: "T.S.U. en Enfermería", text: "T.S.U. en Enfermería" },
          {
            value: "T.S.U. en Terapia Física área Rehabilitación",
            text: "T.S.U. en Terapia Física área Rehabilitación",
          },
          {
            value: "Licenciatura en Enfermería",
            text: "Licenciatura en Enfermería",
          },
          {
            value: "Licenciatura en Terapia Física",
            text: "Licenciatura en Terapia Física",
          },
        ],
        "División Académica de Contabilidad Corporativa": [
          {
            value: "T.S.U. en Transporte y Movilidad",
            text: "T.S.U. en Transporte y Movilidad",
          },
          { value: "T.S.U. en Mercadotecnia", text: "T.S.U. en Mercadotecnia" },
          {
            value: "T.S.U. en Logística Área Transporte Terrestre",
            text: "T.S.U. en Logística Área Transporte Terrestre",
          },
          {
            value: "T.S.U. en Cadena de Suministro",
            text: "T.S.U. en Cadena de Suministro",
          },
          {
            value: "Licenciatura en Contaduría",
            text: "Licenciatura en Contaduría",
          },
          {
            value: "Licenciatura en Innovación de Negocios y Mercadotecnia",
            text: "Licenciatura en Innovación de Negocios y Mercadotecnia",
          },
        ],
        "División Académica de Informática": [
          {
            value: "T.S.U. en T.I. Área Desarrollo de Software Multiplataforma",
            text: "T.S.U. en T.I. Área Desarrollo de Software Multiplataforma",
          },
          {
            value: "T.S.U. en Desarrollo de Software Multiplataforma",
            text: "T.S.U. en Desarrollo de Software Multiplataforma",
          },
          {
            value: "Ingeniería en Desarrollo y Gestión de Software",
            text: "Ingeniería en Desarrollo y Gestión de Software",
          },
        ],
        "División Académica de Mantenimiento Industrial y Mecatrónica": [
          {
            value: "T.S.U. en Procesos Industriales área Tecnología Gráfica",
            text: "T.S.U. en Procesos Industriales área Tecnología Gráfica",
          },
          {
            value: "T.S.U. en Procesos Industriales Área Automotriz",
            text: "T.S.U. en Procesos Industriales Área Automotriz",
          },
          {
            value:
              "T.S.U. en Mecatrónica Área Sistemas de Manufactura Flexible",
            text: "T.S.U. en Mecatrónica Área Sistemas de Manufactura Flexible",
          },
          { value: "T.S.U. en Mecatrónica", text: "T.S.U. en Mecatrónica" },
          {
            value: "T.S.U. en Mantenimiento Industrial",
            text: "T.S.U. en Mantenimiento Industrial",
          },
          {
            value: "T.S.U. en Mantenimiento área Industrial",
            text: "T.S.U. en Mantenimiento área Industrial",
          },
          { value: "T.S.U. en Automotriz", text: "T.S.U. en Automotriz" },
          {
            value: "T.S.U. en Desarrollo de Negocios Área Mercadotecnia",
            text: "T.S.U. en Desarrollo de Negocios Área Mercadotecnia",
          },
          {
            value: "Ingeniería en Mantenimiento Industrial",
            text: "Ingeniería en Mantenimiento Industrial",
          },
          {
            value: "Ingeniería en Mecatrónica",
            text: "Ingeniería en Mecatrónica",
          },
          {
            value: "Ingeniería en Sistemas Productivos",
            text: "Ingeniería en Sistemas Productivos",
          },
        ],
        "División Académica de Tecnología Ambiental": [
          {
            value: "T.S.U. en Química Área Tecnología Ambiental",
            text: "T.S.U. en Química Área Tecnología Ambiental",
          },
          {
            value: "T.S.U. en Nanotecnología Área Materiales",
            text: "T.S.U. en Nanotecnología Área Materiales",
          },
          {
            value: "T.S.U. en Nanotecnología",
            text: "T.S.U. en Nanotecnología",
          },
          {
            value: "T.S.U. en Gestión Ambiental",
            text: "T.S.U. en Gestión Ambiental",
          },
          {
            value: "T.S.U. en Energías Renovables Área Energía Solar",
            text: "T.S.U. en Energías Renovables Área Energía Solar",
          },
          { value: "T.S.U. en Biotecnología", text: "T.S.U. en Biotecnología" },
          {
            value: "Ingeniería en Energías Renovables",
            text: "Ingeniería en Energías Renovables",
          },
          {
            value: "Ingeniería en Nanotecnología",
            text: "Ingeniería en Nanotecnología",
          },
          {
            value: "Ingeniería en Tecnología Ambiental",
            text: "Ingeniería en Tecnología Ambiental",
          },
        ],
        "División Académica de Telemática": [
          {
            value: "T.S.U. en T.I. Área Infraestructura de Redes Digitales",
            text: "T.S.U. en T.I. Área Infraestructura de Redes Digitales",
          },
          {
            value: "T.S.U. en Infraestructura de Redes Digitales",
            text: "T.S.U. en Infraestructura de Redes Digitales",
          },
          {
            value: "T.S.U. en Diseño y Animación Digital",
            text: "T.S.U. en Diseño y Animación Digital",
          },
          {
            value: "T.S.U. en Diseño Digital Área Animación",
            text: "T.S.U. en Diseño Digital Área Animación",
          },
          {
            value: "Licenciatura en Diseño Digital y Producción Audiovisual",
            text: "Licenciatura en Diseño Digital y Producción Audiovisual",
          },
          {
            value: "Ingeniería en Redes Inteligentes y Ciberseguridad",
            text: "Ingeniería en Redes Inteligentes y Ciberseguridad",
          },
        ],
      },
    };
  },
  computed: {
    validaContrasena() {
      this.notificaEstadoPass = "small alert alert-light text-muted";

      if (this.passUsr.length >= 6) {
        this.estadoPass = false;
        this.msgAlert =
          "La contraseña debe tener al menos seis (6) caracteres.";
        this.validaBtn = false;

        if (this.passUsrDos.length >= 6) {
          if (this.passUsr === this.passUsrDos) {
            this.notificaEstadoPass = "small alert alert-success";
            this.msgAlert = "Contraseña valida.";
            this.validaBtn = true;
          } else {
            this.notificaEstadoPass = "small alert alert-danger";
            this.msgAlert = "¡Error! Las contraseñas no coinciden.";
            this.validaBtn = false;
          }
        } else {
          this.estadoPass = false;
          this.validaBtn = false;
        }
      } else {
        this.msgAlert =
          "La contraseña debe tener al menos seis (6) caracteres.";

        if (this.passUsrDos != "") {
          this.estadoPass = false;
          this.validaBtn = false;
        } else {
          this.estadoPass = true;
          this.validaBtn = false;
        }
      }

      return this.msgAlert;
    },
    filteredSpecialties() {
      return this.allSpecialties[this.selectedDivision] || [];
    },
  },
  watch: {
    // Opcional: Reiniciar la especialidad cuando la división cambia
    selectedDivision(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.selectedSpecialty = ""; // Limpia la especialidad cuando cambia la división
      }
    },
  },
  methods: {
    alta() {
      axios
        .post("../cuePsico2/registro/alta.app", {
          opcion: 1,
          matricula: this.matricula,
          correoInst: this.correoInst,
          passUsr: this.passUsr,
          passUsrDos: this.passUsrDos,
          nombre: this.nombre,
          aPaterno: this.aPaterno,
          aMaterno: this.aMaterno,
          fechaNa: this.fechaNa,
          telPersonal: this.telPersonal,
          selectedDivision: this.selectedDivision,
          selectedSpecialty: this.selectedSpecialty,
          nomTutor: this.nomTutor,
          nomRed: this.nomRed,
          telRed: this.telRed,
          turno: this.turno,
        })
        .then((response) => {
          if (response.data === "correcto") {
            Swal.fire({
              icon: "success",
              title: "¡Usuario Activado!",
              showConfirmButton: false,
              timer: 2000,
              onClose: () => {
                window.location = "https://www.google.com.mx/";
              },
            });
          } else {
            this.datos = response.data;
            // console.log(response.data);
          }
        });
    },

    soloLetras() {
      if (
        (event.keyCode > 32 && event.keyCode < 48) ||
        (event.keyCode > 57 && event.keyCode < 65) ||
        (event.keyCode > 90 && event.keyCode < 97) ||
        (event.keyCode > 122 && event.keyCode < 160) ||
        (event.keyCode > 166 && event.keyCode < 190)
      )
        event.returnValue = false;
    },
    soloNumeros() {
      if (
        (event.keyCode >= 32 && event.keyCode < 48) ||
        (event.keyCode > 57 && event.keyCode < 190)
      )
        event.returnValue = false;
    },
    soloCorreo(event) {
      const char = String.fromCharCode(event.keyCode);
      const emailRegex = /[a-zA-Z0-9.@\-_]/;
      if (event.keyCode === 8 || event.keyCode === 9 || event.keyCode === 13) {
        return true;
      }
      if (!emailRegex.test(char)) {
        event.preventDefault();
        return false;
      }
    },
  },
  created() {},
  mounted() {},
});

app.component("web-regDoc", {
  template: /*html*/ `
    <div class="row justify-content-center align-items-center vh-100 animate__animated animate__fadeIn">
    
        <div class="col-md-10 mx-auto">
            <div class="row justify-content-center align-items-center vh-100">
    
                <!-- contenido web -->
                <div class="card border-0 shadow-lg">
                    <div class="card-body p-0">
                        <div class="row">
    
                            <div class="col-md-12 d-md-block animate__animated animate__fadeIn">
                                <div class="col-md-8 mx-auto">
                                    <div class="my-3">
                                        <div class="my-3">
                                            <div class="mx-auto text-center">
                                                <img src="img/docente.jpg" class="img-fluid" style="width: 350px;">
                                            </div>
                                            <h1 class="text-center h2">
                                                Docentes
                                            </h1>
                                            <br>
                                            <p class="text-justify">
                                                Los y las paciente de primera vez, deberán registrarse en
                                                la plataforma con los siguientes datos, para crear una
                                                cuenta en la plataforma, y de esta manera estar
                                                gestionando sus citas de seguimiento con su terapeuta
                                                asignado.
                                            </p>
                                            <br>
    
                                            <br>
                                            <div class="row justify-content-center">
                                                <div class="col-md-6 my-3">
                                                    <router-link class="a btn btn-secondary btn-lg btn-block" to="/web-registro">
                                                        <i class="fas fas fa-arrow-left"></i> Regresar
                                                    </router-link>                                                    
                                                </div>

                                                <div class="col-md-6 my-3">
                                                    <a href="#" class="btn btn-success btn-lg btn-block">
                                                        <span class="icon">
                                                            <i class="fas fas fa-arrow-right"></i> Continuar
                                                        </span>
                                                    </a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
                <!-- contenido web -->
    
    
            </div>
    
        </div>
    </div>
    `,
  data() {
    return {
      datos: "",
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
});
