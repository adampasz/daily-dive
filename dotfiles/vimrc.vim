""""""""""""""""""""""""""""
""" BASIC SETTINGS
""""""""""""""""""""""""""""
set nocompatible              " be iMproved, required
" don't create and leave temp files
set noswapfile
set nowritebackup " was causing issues with file watcher
" highlight search results 
set hlsearch
" Improve tab completion in command bar
set wildmode=list:longest,full
" tabs
autocmd FileType * set tabstop=2 | set shiftwidth=2
set expandtab
" line numbers
autocmd InsertEnter * :set number
autocmd InsertLeave * :set relativenumber
set relativenumber
" persist undos - assumes .vim/undo dir exists!
" see http://stackoverflow.com/questions/5700389/using-vims-persistent-undo
set undofile                " Save undo's after file closes
set undodir=$HOME/.vim/undo " where to save undo histories
set undolevels=1000         " How many undos
set undoreload=10000        " number of lines to save for undo
set hidden                  " Don't force save when changing buffers

" cursor lines
set cursorline
set cursorcolumn
set colorcolumn=120


syntax on
colorscheme firewatch

