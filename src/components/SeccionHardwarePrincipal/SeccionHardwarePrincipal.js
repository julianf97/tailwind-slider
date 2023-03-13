import "./seccionHardwarePrincipal.scss"


export const SeccionHarwarePrincipal = () => { 

    return (
        <div className="contenedor-principal">
            <div className="contenedor-secciones">
                <div className="seccion seccion1">
                    <div className="contenedor-img">
                        <img src="https://spacegamer.com.ar/img/Public/1058-categoria-auri-6454.jpg" alt="auriculares"/>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <h3>Auriculares</h3>
                        <h4>45 Productos</h4>
                    </div>
                </div>
                <div className="seccion seccion2">
                    <div className="contenedor-img">
                        <img src="https://spacegamer.com.ar/img/Public/1058-categoria-ax6-b-800-6456.jpg" alt="gabinete"/>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <h3>Gabinete</h3>
                        <h4>32 Productos</h4>
                    </div>
                </div>
                <div className="seccion seccion3">
                    <div className="contenedor-img">
                        <img src="https://spacegamer.com.ar/img/Public/1058-categoria-monitor-86.jpg" alt="monitores"/>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <h3>Monitores</h3>
                        <h4>22 Productos</h4>
                    </div>
                </div>
                <div className="seccion seccion4">
                    <div className="contenedor-img">
                        <img src="https://spacegamer.com.ar/img/Public/1058-categoria-pcgamer-8381.jpg" alt="pc armadas"/>
                    </div>
                    <div className="contenedor-titulo-subtitulo">
                        <h3>Pc Armadas</h3>
                        <h4>13 Productos</h4>
                    </div>
                </div>
            </div>
        </div>
    )
 }