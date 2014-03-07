# Instructions

1. Clone this repository

    $ git clone https://github.com/samyukti/vim-gym.git

2. Clone the reference repository

    $ git clone https://github.com/samyukti/whats-my-emi.git

3. Compare the repositories

    $ diff -bry --suppress-common-lines -x ".bundle" whats-my-emi vim-gym
    
  or in unified context

    $ diff -bur -x ".bundle" whats-my-emi vim-gym

4. Open vim, and apply the changes to files in vim-gym (within the allotted time)

5. Once the changes are complete, make sure that the application is working

    $ bundle exec rspec
    $ rackup