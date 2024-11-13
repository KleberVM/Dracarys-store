from django.contrib import admin
from .models import Usuario ,Categoria, subCategoria , Producto , Imagenes ,Departamento,Provincia,EstadoDelProducto,CarritoProducto,ConfiguracionLogo

from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    fields=["nombre","correo","estadoUsuario"]
    list_display =["nombre","correo","estadoUsuario"] #lo que se va mostrar
    list_editable = ["estadoUsuario"]  # Permite editar el campo estadoUsuario desde la lista
    actions = None  # Esto elimina la acción de "Eliminar usuarios seleccionados" en el panel

    # Desactivar la opción de añadir nuevos usuarios
    def has_add_permission(self, request):
        return False
admin.site.register(Usuario,UserAdmin)#forma para registrar 1


@admin.register(ConfiguracionLogo)
class ConfiguracionAdmin(admin.ModelAdmin):
    fields = ["logo"]  # Solo mostrar 'logo' en el formulario de detalles
    list_display = ["nombre", "logo"]  # Mostrar 'nombre' y 'logo' en el listado
    list_display_links = ["nombre"]   # 'nombre' será el enlace clicable
    list_editable = ["logo"]  # Solo 'logo' será editable directamente en la lista
    actions = None  # Desactivar las acciones

    def has_add_permission(self, request):
        # Permitir agregar solo si no existe ningún registro
        if ConfiguracionLogo.objects.exists():
            return False
        return True

    def get_readonly_fields(self, request, obj=None):
        # Hacer el campo 'nombre' de solo lectura en el formulario de detalle
        if obj:  # Si el objeto ya existe
            return ["nombre"]
        return []




@admin.register(Categoria)#forma para registrar 2
class CategoriaAdmin(admin.ModelAdmin):#lo que se puede editar
    fields=["nombre"]
    list_display =["nombre"]

@admin.register(subCategoria)#forma para registrar 2
class subCategoriaAdmin(admin.ModelAdmin):#lo que se puede editar
    fields=["nombre","categoria"]
    list_display =["nombre","categoria"]

@admin.register(Producto)
class ProductoAdmin(admin.ModelAdmin):
    fields=["nombre","estado_producto","descripcion","precio","usuario","subcategoria","provincia","estado","direccion"]
    list_display =["nombre","precio","subcategoria"]

@admin.register(Imagenes)
class ProductImageAdmin(admin.ModelAdmin):
    fields=["ruta","producto"]
    list_display =["ruta","producto"]

@admin.register(Departamento)
class DepartamentoAdmin(admin.ModelAdmin):
    fields=["nombre"]
    list_display =["nombre"]

@admin.register(Provincia)
class ProvinciaAdmin(admin.ModelAdmin):
    fields=["nombre","departamento"]
    list_display =["nombre","departamento"]
    
@admin.register(EstadoDelProducto)
class EstadoProductoAdmin(admin.ModelAdmin):
    fields=["estado"]
    list_display =["estado"]

@admin.register(CarritoProducto)
class CarritoAdmin(admin.ModelAdmin):
    fields=["usuario","producto"]
    list_display=["usuario","producto"]