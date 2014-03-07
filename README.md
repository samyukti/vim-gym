# Vim Gym

An exercise to practice Vim, while learning Ruby, Sinatra, JavaScript and Haml

# Instructions

Clone this repository

    $ git clone https://github.com/samyukti/vim-gym.git

Clone the reference repository

    $ git clone https://github.com/samyukti/whats-my-emi.git

Compare the repositories

    $ diff -bry -x ".bundle" whats-my-emi vim-gym
    
  or in unified context

    $ diff -bur -x ".bundle" whats-my-emi vim-gym

Open vim, and apply the changes to files in vim-gym (within the allotted time)

    $ cd vim-gym
    $ vim

Once the changes are complete, make sure that the application is working

    $ bundle exec rspec
    $ rackup
