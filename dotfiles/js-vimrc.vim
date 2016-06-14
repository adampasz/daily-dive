" Typescript Syntax 
Plugin 'leafgarland/typescript-vim'

" Typescript Completion
Plugin 'Shougo/vimproc.vim' " Need to run `make` manually
Plugin 'Quramy/tsuquyomi' 
let g:tsuquyomi_completion_detail = 1
" Type <C-]> in normal mode or visual mode, Tsuquyomi navigates to the location where the symbol under the cursor is defined.
" And type <C-t> , Tsuquyomi moves the cursor to the location where the last <C-]> was typed.
" Type <C-^> in normal mode or visual mode, Tsuquyomi shows a list of location where the symbol under the cursor is referenced.


