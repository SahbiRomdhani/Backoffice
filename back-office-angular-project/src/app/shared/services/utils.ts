declare let jQuery: any;

export class Utils {
  static getModalTemplate() {
    return '<div class="modal-dialog modal-lg" role="document">\n' +
      '  <div class="modal-content">\n' +
      '    <div class="modal-header">\n' +
      '      <div class="kv-zoom-actions btn-group">{toggleheader}{fullscreen}{borderless}{close}</div>\n' +
      '      <h6 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h6>\n' +
      '    </div>\n' +
      '    <div class="modal-body">\n' +
      '      <div class="floating-buttons btn-group"></div>\n' +
      '      <div class="kv-zoom-body file-zoom-content"></div>\n' + '{prev} {next}\n' +
      '    </div>\n' +
      '  </div>\n' +
      '</div>\n';
  }

  static getPreviewZoomButtonClasses() {
    return {
      toggleheader: 'btn btn-default btn-icon btn-xs btn-header-toggle',
      fullscreen: 'btn btn-default btn-icon btn-xs',
      borderless: 'btn btn-default btn-icon btn-xs',
      close: 'btn btn-default btn-icon btn-xs'
    };
  }

  static getPreviewZoomButtonIcons() {
    return {
      prev: '<i class="icon-arrow-left32"></i>',
      next: '<i class="icon-arrow-right32"></i>',
      toggleheader: '<i class="icon-menu-open"></i>',
      fullscreen: '<i class="icon-screen-full"></i>',
      borderless: '<i class="icon-alignment-unalign"></i>',
      close: '<i class="icon-cross3"></i>'
    };
  }

  static initializeUploadFile(url: string, token: string, className: string, initialData?: any[],
                              initialPreviewConfig?: InitialPreviewConfig[], allowedFileExtensions?: string[]) {
    jQuery(className).fileinput({
      uploadUrl: url, // server upload action
      uploadAsync: true,
      maxFileCount: 10,
      maxFileSize: 1024, //2MO
      showUpload: true,
      overwriteInitial: false,
      initialPreview: initialData,
      initialPreviewAsData: true,
      initialPreviewFileType: 'image', // image is the default and can be overridden in config below
      dropZoneTitle: "Pas encore de fichier(s) selectionné(s)",
      initialPreviewConfig: initialPreviewConfig,
      fileActionSettings: {
        removeIcon: '<i class="icon-trash"></i>',
        uploadIcon: '<i class="icon-cloud-upload"></i>',
        indicatorNew: '<i class="icon-plus text-slate"></i>',
        indicatorSuccess: '<i class="icon-checkmark3 file-icon-large text-success"></i>',
        indicatorError: '<i class="icon-cross2 text-danger"></i>',
        indicatorLoading: '<i class="icon-spinner2 spinner text-muted"></i>',
      },
      layoutTemplates: {
        icon: '<i class="icon-file-check"></i>',
        modal: Utils.getModalTemplate()
      },
      purifyHtml: true, // this by default purifies HTML data for preview
      initialCaption: "Pas encore de fichier selectionné",
      previewZoomButtonClasses: Utils.getPreviewZoomButtonClasses(),
      previewZoomButtonIcons: Utils.getPreviewZoomButtonIcons(),
      ajaxSettings: {headers: {'Authorization': 'Bearer ' + token}},
    });
  }

  static loadTypeFromExtension(ext: string) {
    if (ext.toLowerCase().match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i)) {
      return "video";
    }
    if (ext.toLowerCase().match(/(pdf)$/i)) {
      return "pdf";
    }
  }
  static initializeDataTables(timout: number, columnNumber: number) {
    // Basic datatable
    const tableListStation = jQuery('.datatable-basic');
    if (jQuery.fn.DataTable.isDataTable('.datatable-basic')) {
      tableListStation.dataTable().fnDestroy();
    }
    setTimeout(function () {
      tableListStation.DataTable({
        columnDefs: [{
          targets: [columnNumber - 1]
        }]
      });
    }, timout);
  }
  static loadFileTypeFromExtension(ext: string) {
    if (ext.toLowerCase().match(/(avi|mpg|mkv|mov|mp4|3gp|webm|wmv)$/i)) {
      return "video/" + ext;
    }
    if (ext.toLowerCase().match(/(pdf)$/i)) {
      return "pdf";
    }
  }
  /**
   * Formats a dateObject or date string to Y-m-d date
   * Example: Converts  dateObject or date string  Sat Aug 19 2017 00:00:00 GMT+0530 (India Standard Time)   TO  2017-08-19
   */
  static format_date( date )
  {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();

    var day = date.getDate().toString();
    var hours = date.getHours().toString();
    var minutes = date.getMinutes().toString();
    var seconds = date.getSeconds().toString();
    month = month.length > 1 ? month : '0' + month;
    day = day.length > 1 ? day : '0' + day;
    hours = hours.length > 1 ? hours : '0' +hours;
    minutes = minutes.length > 1 ? minutes : '0' +minutes;
    seconds = seconds.length > 1 ? seconds : '0' +seconds;
    console.log(year+'-'+month+'-'+day+' '+hours+':'+minutes);
    return year+'-'+month+'-'+day+' '+hours+':'+minutes+':'+seconds;
  }

}


export class InitialPreviewConfig {
  caption?: string;
  size?: number;
  width?: string;
  type?: string;
  filetype?: string;
  url: string;
  key: number;
}
